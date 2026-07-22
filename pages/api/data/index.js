// Use @ alias configured in next.config.js which points to src/
const InputSanitizer = require('@/util/inputSanitizer')
const ContentValidator = require('@/util/contentValidator')
const FileNotFoundError = require('@/exceptions/fileNotFoundError')
const SheetNotFoundError = require('@/exceptions/sheetNotFoundError')
const InvalidContentError = require('@/exceptions/invalidContentError')
const MalformedDataError = require('@/exceptions/malformedDataError')
const ExceptionMessages = require('@/util/exceptionMessages')
const config = require('@/config')
const { canAccessRadar } = require('@/util/radarAccess')
const { getServerSession } = require('next-auth/next')
const { authOptions } = require('../auth/[...nextauth]')
const { getServiceAccountAuth } = require('@/util/googleSheetsAuth')
const { google } = require('googleapis')

// Helper to extract sheet ID from URL
function extractSheetId(sheetReference) {
  const matches = sheetReference.match(/https:\/\/docs.google.com\/spreadsheets\/d\/(.*?)($|\/$|\/.*|\?.*)/)
  return matches !== null ? matches[1] : sheetReference
}

// Helper to get file name from URL
function getFileName(url) {
  const search = /([^\\/]+)$/
  const match = search.exec(decodeURIComponent(url.replace(/\+/g, ' ')))
  return match != null ? match[1] : url
}

// Fetch Google Sheets data
async function fetchGoogleSheetData(sheetId, sheetName = null) {
  // Prefer a service account so private sheets can be read without being made public.
  // Falls back to a plain API key, which only works for publicly-shared sheets.
  const auth = getServiceAccountAuth() || process.env.API_KEY

  if (!auth) {
    throw new SheetNotFoundError(
      'Google Sheets access is not configured. Set GOOGLE_SERVICE_ACCOUNT_EMAIL/GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY or API_KEY.',
    )
  }

  try {
    const sheets = google.sheets({ version: 'v4', auth })

    const metadataResponse = await sheets.spreadsheets.get({ spreadsheetId: sheetId })
    const spreadsheet = metadataResponse.data
    const sheetNames = spreadsheet.sheets.map((s) => s.properties.title)
    const currentSheetName = sheetName || sheetNames[0]

    const dataResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: `${currentSheetName}!A1:F`,
    })

    const values = dataResponse.data.values

    if (!values || values.length === 0) {
      throw new MalformedDataError(ExceptionMessages.MISSING_CONTENT)
    }

    // Validate headers
    const header = values[0]
    const contentValidator = new ContentValidator(header)
    contentValidator.verifyContent()
    contentValidator.verifyHeaders()

    // Process data rows
    const dataRows = values.slice(1)
    const inputSanitizer = new InputSanitizer()
    const blips = dataRows.map((row) => inputSanitizer.sanitizeForProtectedSheet(row, header))

    return {
      title: spreadsheet.properties.title,
      blips,
      sheetName: currentSheetName,
      sheetNames,
    }
  } catch (error) {
    if (error instanceof SheetNotFoundError || error instanceof MalformedDataError || error instanceof InvalidContentError) {
      throw error
    }
    // Handle Google API errors (googleapis reports status via response.status/code)
    const status = error.response?.status || error.code
    if (status === 404 || status === 'ENOTFOUND') {
      throw new SheetNotFoundError(ExceptionMessages.SHEET_NOT_FOUND)
    }
    if (status === 403 || status === 401 || status === 'UNAUTHENTICATED') {
      throw new SheetNotFoundError(ExceptionMessages.UNAUTHORIZED || 'Unauthorized access to sheet')
    }
    throw new SheetNotFoundError(ExceptionMessages.SHEET_NOT_FOUND || error.message)
  }
}

// Fetch CSV data
async function fetchCSVData(url) {
  try {
    // Dynamically import d3 as it's ESM
    const d3Module = await import('d3')
    const d3Lib = d3Module.default || d3Module

    const response = await fetch(url)
    if (!response.ok) {
      throw new FileNotFoundError(`Oops! We can't find the CSV file you've entered`)
    }

    const csvText = await response.text()
    const data = d3Lib.csvParse(csvText)

    if (!data || data.length === 0) {
      throw new InvalidContentError(ExceptionMessages.INVALID_CSV_CONTENT)
    }

    const columnNames = data.columns
    delete data.columns

    const contentValidator = new ContentValidator(columnNames)
    contentValidator.verifyContent()
    contentValidator.verifyHeaders()

    const inputSanitizer = new InputSanitizer()
    const blips = data.map((row) => inputSanitizer.sanitize(row))

    return {
      title: getFileName(url).replace(/\.csv$/, ''),
      blips,
      sheetName: 'CSV File',
      sheetNames: [],
    }
  } catch (error) {
    if (error instanceof FileNotFoundError || error instanceof InvalidContentError || error instanceof MalformedDataError) {
      throw error
    }
    throw new FileNotFoundError(`Oops! We can't find the CSV file you've entered`)
  }
}

// Fetch JSON data
async function fetchJSONData(url) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new FileNotFoundError(`Oops! We can't find the JSON file you've entered`)
    }

    const data = await response.json()

    if (!data || !Array.isArray(data) || data.length === 0) {
      throw new InvalidContentError(ExceptionMessages.INVALID_JSON_CONTENT)
    }

    const columnNames = Object.keys(data[0])
    const contentValidator = new ContentValidator(columnNames)
    contentValidator.verifyContent()
    contentValidator.verifyHeaders()

    const inputSanitizer = new InputSanitizer()
    const blips = data.map((row) => inputSanitizer.sanitize(row))

    return {
      title: getFileName(url).replace(/\.json$/, ''),
      blips,
      sheetName: 'JSON File',
      sheetNames: [],
    }
  } catch (error) {
    if (error instanceof FileNotFoundError || error instanceof InvalidContentError || error instanceof MalformedDataError) {
      throw error
    }
    throw new FileNotFoundError(`Oops! We can't find the JSON file you've entered`)
  }
}

// Main API handler
export default async function handler(req, res) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const session = await getServerSession(req, res, authOptions)
    if (!session?.user?.email) {
      return res.status(401).json({ error: 'Sign in required' })
    }

    const { documentId, sheetId, radarId } = req.method === 'GET' ? req.query : req.body
    let { sheetName } = req.method === 'GET' ? req.query : req.body
    let sourceUrl = documentId || sheetId

    // If no source URL provided, check for radarId or use default from config
    if (!sourceUrl) {
      const configResult = config()

      // If radarId is provided, use the corresponding data source
      if (radarId && configResult?.radars) {
        const selectedRadar = configResult.radars.find((r) => r.id === radarId)
        if (!selectedRadar) {
          return res.status(404).json({ error: 'Radar not found' })
        }
        if (!canAccessRadar(selectedRadar, session.user.email)) {
          return res.status(403).json({ error: 'You do not have access to this radar' })
        }
        sourceUrl = selectedRadar.dataSource
        sheetName = sheetName || selectedRadar.sheetName
      }

      // Fall back to default data source if still no sourceUrl
      if (!sourceUrl) {
        sourceUrl = configResult?.dataSource
      }

      if (!sourceUrl) {
        return res.status(400).json({ error: 'No data source configured. Please set DATA_SOURCE environment variable or provide documentId/sheetId parameter.' })
      }
    }

    let result

    // Determine data source type and fetch accordingly
    if (sourceUrl.endsWith('.csv')) {
      result = await fetchCSVData(sourceUrl)
    } else if (sourceUrl.endsWith('.json')) {
      result = await fetchJSONData(sourceUrl)
    } else {
      // Assume it's a Google Sheet
      const extractedSheetId = extractSheetId(sourceUrl)
      result = await fetchGoogleSheetData(extractedSheetId, sheetName)
    }

    return res.status(200).json(result)
  } catch (error) {
    console.error('Error fetching data:', error)

    if (error instanceof FileNotFoundError) {
      return res.status(404).json({ error: error.message || 'File not found' })
    }
    if (error instanceof SheetNotFoundError) {
      return res.status(404).json({ error: error.message || 'Sheet not found' })
    }
    if (error instanceof InvalidContentError || error instanceof MalformedDataError) {
      return res.status(400).json({ error: error.message || 'Invalid content' })
    }

    return res.status(500).json({ error: error.message || 'Internal server error' })
  }
}
