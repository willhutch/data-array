import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import RadarVisualization from '../components/RadarVisualization'

export default function Home() {
  const router = useRouter()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Get documentId or sheetId from query params (optional - will use default from backend if not provided)
    const { documentId, sheetId, sheetName } = router.query
    const sourceUrl = documentId || sheetId

    // Always fetch data - if no sourceUrl, backend will use default from config
    fetchRadarData(sourceUrl, sheetName)
  }, [router.query])

  const fetchRadarData = async (sourceUrl, sheetName) => {
    setLoading(true)
    setError(null)

    try {
      const params = new URLSearchParams()
      // Only add documentId if provided (otherwise backend uses default from config)
      if (sourceUrl) {
        params.append('documentId', sourceUrl)
      }
      if (sheetName) {
        params.append('sheetName', sheetName)
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
