import { useEffect, useRef } from 'react'

export default function RadarVisualization({ data }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!data || typeof window === 'undefined') return

    // Dynamically import the factory exports and plot radar
    const loadAndPlot = async () => {
      try {
        const { plotRadarGraph } = require('../src/util/factoryExports')

        // Clear any existing radar
        const radarElement = document.getElementById('radar')
        if (radarElement) {
          radarElement.innerHTML = ''
        }

        // Ensure the radar container exists
        if (!radarElement) {
          console.error('Radar container not found')
          return
        }

        // Plot the radar using existing factory logic
        // The data structure should match: { title, blips, sheetName, sheetNames }
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/c55d8f9b-e738-4e94-a1fc-550ceba6989a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'components/RadarVisualization.js:28',message:'About to call plotRadarGraph',data:{hasData:!!data,hasBlips:!!data?.blips,blipCount:data?.blips?.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'G'})}).catch(()=>{});
        // #endregion
        await plotRadarGraph(data.title, data.blips, data.sheetName, data.sheetNames || [])
      } catch (error) {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/c55d8f9b-e738-4e94-a1fc-550ceba6989a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'components/RadarVisualization.js:31',message:'Error in plotRadarGraph',data:{errorMessage:error.message,errorStack:error.stack,errorName:error.name},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'H'})}).catch(()=>{});
        // #endregion
        console.error('Error plotting radar:', error)
      }
    }

    loadAndPlot()

    // Cleanup function
    return () => {
      // Optional: cleanup if needed
    }
  }, [data])

  return (
    <>
      <div className="graph-header"></div>
      <div id="radar" ref={containerRef}>
        <p className="no-blip-text">
          There are no blips on this quadrant, please check your Google sheet/CSV/JSON file once.
        </p>
      </div>
      <div className="all-quadrants-mobile show-all-quadrants-mobile"></div>
      <div className="graph-footer"></div>
    </>
  )
}
