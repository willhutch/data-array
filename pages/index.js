import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSession, signIn } from 'next-auth/react'
import RadarVisualization from '../components/RadarVisualization'
import RadarMenu from '../components/RadarMenu'

export default function Home() {
  const router = useRouter()
  const { status } = useSession()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [radars, setRadars] = useState([])
  const [selectedRadarId, setSelectedRadarId] = useState(null)

  // Fetch available radars once signed in
  useEffect(() => {
    if (status !== 'authenticated') {
      return
    }
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
  }, [status])

  // Fetch radar data when selectedRadarId or query params change
  useEffect(() => {
    if (status !== 'authenticated') {
      return
    }
    // Get documentId or sheetId from query params (optional - will use default from backend if not provided)
    const { documentId, sheetId, sheetName, radarId } = router.query
    const sourceUrl = documentId || sheetId
    const radarIdToUse = radarId || selectedRadarId

    // Always fetch data - if no sourceUrl, backend will use radarIdToUse or default from config
    if (radarIdToUse || sourceUrl) {
      fetchRadarData(sourceUrl, sheetName, radarIdToUse)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, router.query, selectedRadarId])

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

  if (status === 'loading') {
    return (
      <main>
        <div className="helper-description home-page">
          <p>Loading...</p>
        </div>
      </main>
    )
  }

  if (status === 'unauthenticated') {
    return (
      <main>
        <div className="signin-page">
          <div className="signin-page__card">
            <h1 className="signin-page__title">Intel Array</h1>
            <p className="signin-page__subtitle">Sign in</p>
            <button className="signin-page__google-button" onClick={() => signIn('google')}>
              <svg width="20" height="20" viewBox="0 0 20 20">
                <path
                  fill="#4285F4"
                  d="M19.6 10.23c0-.68-.06-1.36-.18-2.02H10v3.83h5.4a4.62 4.62 0 0 1-2 3.03v2.5h3.23c1.9-1.75 2.97-4.33 2.97-7.34z"
                />
                <path
                  fill="#34A853"
                  d="M10 20c2.7 0 4.96-.89 6.62-2.42l-3.23-2.5c-.9.6-2.05.95-3.39.95-2.6 0-4.8-1.76-5.6-4.12H1.06v2.59A10 10 0 0 0 10 20z"
                />
                <path
                  fill="#FBBC05"
                  d="M4.4 11.9a6 6 0 0 1 0-3.8V5.5H1.06a10 10 0 0 0 0 9l3.34-2.6z"
                />
                <path
                  fill="#EA4335"
                  d="M10 3.98c1.47 0 2.79.5 3.83 1.5l2.87-2.87A9.6 9.6 0 0 0 10 0 10 10 0 0 0 1.06 5.5l3.34 2.6C5.2 5.74 7.4 3.98 10 3.98z"
                />
              </svg>
              Sign in with Google
            </button>
          </div>
        </div>
      </main>
    )
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
