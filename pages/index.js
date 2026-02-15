import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import RadarVisualization from '../components/RadarVisualization'
import RadarMenu from '../components/RadarMenu'

export default function Home() {
  const router = useRouter()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [radars, setRadars] = useState([])
  const [selectedRadarId, setSelectedRadarId] = useState(null)

  // Fetch available radars on mount
  useEffect(() => {
    const fetchRadars = async () => {
      try {
        const response = await fetch('/api/radars')
        const result = await response.json()
        if (response.ok && result.radars) {
          setRadars(result.radars)
          // Set first radar as default if none selected and no query params
          const { documentId, sheetId, radarId } = router.query
          if (result.radars.length > 0 && !selectedRadarId && !documentId && !sheetId && !radarId) {
            setSelectedRadarId(result.radars[0].id)
          } else if (radarId && result.radars.some((r) => r.id === radarId)) {
            setSelectedRadarId(radarId)
          }
        }
      } catch (err) {
        console.error('Error fetching radars:', err)
      }
    }
    fetchRadars()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Fetch radar data when selectedRadarId or query params change
  useEffect(() => {
    // Get documentId or sheetId from query params (optional - will use default from backend if not provided)
    const { documentId, sheetId, sheetName, radarId } = router.query
    const sourceUrl = documentId || sheetId
    const radarIdToUse = radarId || selectedRadarId

    // Always fetch data - if no sourceUrl, backend will use radarIdToUse or default from config
    if (radarIdToUse || sourceUrl) {
      fetchRadarData(sourceUrl, sheetName, radarIdToUse)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query, selectedRadarId])

  const fetchRadarData = async (sourceUrl, sheetName, radarId) => {
    setLoading(true)
    setError(null)

    try {
      const params = new URLSearchParams()
      // Only add documentId if provided (otherwise backend uses radarId or default from config)
      if (sourceUrl) {
        params.append('documentId', sourceUrl)
      }
      if (sheetName) {
        params.append('sheetName', sheetName)
      }
      if (radarId) {
        params.append('radarId', radarId)
      }

      // Build URL - if no params, just call /api/data (backend will use default)
      const apiUrl = params.toString() ? `/api/data?${params.toString()}` : '/api/data'
      const response = await fetch(apiUrl)
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to fetch radar data')
      }

      setData(result)
      // Update document title
      if (typeof document !== 'undefined') {
        document.title = result.title.replace(/\.(csv|json)$/, '')
      }
    } catch (err) {
      setError(err.message || 'An error occurred while loading the radar')
      console.error('Error fetching radar data:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleRadarChange = (radarId) => {
    setSelectedRadarId(radarId)
    const url = new URL(window.location.href)
    url.searchParams.set('radarId', radarId)
    url.searchParams.delete('documentId')
    url.searchParams.delete('sheetId')
    url.searchParams.delete('sheetName')
    router.push(url.toString())
  }

  return (
    <>
      <Head>
        <title>Build your own Radar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="preconnect" href="https://rsms.me/" />
        <link
          rel="stylesheet"
          href="https://rsms.me/inter/inter.css"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bitter:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        {radars.length > 0 && (
          <RadarMenu
            radars={radars}
            selectedRadarId={selectedRadarId || router.query.radarId}
            onRadarChange={handleRadarChange}
          />
        )}
        {loading && (
          <div className="helper-description home-page">
            <span className="loader-text" style={{ display: 'block' }}>
              <span className="loader-text__title">Building your radar...</span>
              <p>Your Technology Radar will be available in just a few seconds</p>
              <div className="loader-wrapper">
                <div style={{ animationDelay: '0s' }}></div>
                <div style={{ animationDelay: '0.25s' }}></div>
                <div style={{ animationDelay: '0.75s' }}></div>
                <div style={{ animationDelay: '0.5s' }}></div>
              </div>
            </span>
          </div>
        )}

        {error && (
          <div className="error-container home-page">
            <div className="error-container__message">
              <p>{error}</p>
            </div>
          </div>
        )}

        {data && <RadarVisualization data={data} />}
        
        {!loading && !error && !data && (
          <div className="helper-description home-page">
            <p>Loading radar data...</p>
          </div>
        )}
      </main>
    </>
  )
}
