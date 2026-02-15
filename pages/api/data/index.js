// Use @ alias configured in next.config.js which points to src/
const InputSanitizer = require('@/util/inputSanitizer')
const ContentValidator = require('@/util/contentValidator')
const FileNotFoundError = require('@/exceptions/fileNotFoundError')
const SheetNotFoundError = require('@/exceptions/sheetNotFoundError')
const InvalidContentError = require('@/exceptions/invalidContentError')
const MalformedDataError = require('@/exceptions/malformedDataError')
const ExceptionMessages = require('@/util/exceptionMessages')

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
  const API_KEY = process.env.API_KEY

  try {
    // For public Google Sheets, use the API directly with API key
    // This is simpler and more reliable than googleapis for public sheets
    if (!API_KEY) {
      throw new SheetNotFoundError('API_KEY environment variable is required for Google Sheets access')
    }

    // Get spreadsheet metadata
    const metadataUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?key=${API_KEY}`
    const metadataResponse = await fetch(metadataUrl)
    
    if (!metadataResponse.ok) {
      if (metadataResponse.status === 404) {
        throw new SheetNotFoundError(ExceptionMessages.SHEET_NOT_FOUND)
      }
      if (metadataResponse.status === 403) {
        throw new SheetNotFoundError(ExceptionMessages.UNAUTHORIZED || 'Unauthorized access to sheet')
      }
      throw new Error(`Google Sheets API error: ${metadataResponse.status}`)
    }

    const spreadsheet = await metadataResponse.json()
    const sheetNames = spreadsheet.sheets.map((s) => s.properties.title)
    const currentSheetName = sheetName || sheetNames[0]

    // Get sheet data
    const dataUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(currentSheetName)}!A1:F?key=${API_KEY}`
    const dataResponse = await fetch(dataUrl)
    
    if (!dataResponse.ok) {
      throw new Error(`Failed to fetch sheet data: ${dataResponse.status}`)
    }

    const dataResult = await dataResponse.json()
    const values = dataResult.values

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
    // Handle Google API errors
    if (error.code === 404 || error.code === 'ENOTFOUND') {
      throw new SheetNotFoundError(ExceptionMessages.SHEET_NOT_FOUND)
    }
    if (error.code === 403 || error.code === 'UNAUTHENTICATED') {
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
    const { documentId, sheetId, sheetName } = req.method === 'GET' ? req.query : req.body
    const sourceUrl = documentId || sheetId

    if (!sourceUrl) {
      return res.status(400).json({ error: 'Missing documentId or sheetId parameter' })
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
