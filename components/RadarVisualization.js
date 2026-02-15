import { useEffect, useRef } from 'react'

// Module-level flag that persists across component remounts (for React StrictMode)
let plotInProgress = false
let hasPlotted = false

export default function RadarVisualization({ data }) {
  const containerRef = useRef(null)
  const lastDataRef = useRef(null)

  useEffect(() => {
    if (!data || typeof window === 'undefined') {
      return
    }

    // Reset flags if data changed (allows re-plotting when data updates)
    if (lastDataRef.current !== data) {
      hasPlotted = false
      plotInProgress = false
      lastDataRef.current = data
    }

    // Check for existing SVG synchronously before starting (most reliable check)
    const radarElement = document.getElementById('radar')
    if (radarElement) {
      const existingSvg = radarElement.querySelector('svg#radar-plot')
      if (existingSvg) {
        return
      }
    }

    // Prevent duplicate plotting - check module-level flag (persists across remounts)
    if (hasPlotted || plotInProgress) {
      return
    }

    // Set flag synchronously BEFORE async function to prevent race condition
    plotInProgress = true

    // Dynamically import the factory exports and plot radar
    const loadAndPlot = async () => {
      try {
        const { plotRadarGraph } = require('../src/util/factoryExports')

        // Double-check SVG doesn't exist (in case it was created between checks)
        const radarElement = document.getElementById('radar')
        if (radarElement) {
          const existingSvg = radarElement.querySelector('svg#radar-plot')
          if (existingSvg) {
            plotInProgress = false
            hasPlotted = true
            return
          }
          radarElement.innerHTML = ''
        }

        // Ensure the radar container exists
        if (!radarElement) {
          plotInProgress = false
          return
        }

        // Plot the radar using existing factory logic
        // The data structure should match: { title, blips, sheetName, sheetNames }
        await plotRadarGraph(data.title, data.blips, data.sheetName, data.sheetNames || [])
        hasPlotted = true
      } catch (error) {
        console.error('Error plotting radar:', error)
      } finally {
        plotInProgress = false
      }
    }

    loadAndPlot()
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
