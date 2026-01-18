// Export the plotRadarGraph function for use in React components
// Use dynamic import for d3 since it's ESM
let d3Promise = null
async function getD3() {
  if (!d3Promise) {
    d3Promise = import('d3').then(m => m.default || m)
  }
  return d3Promise
}
const _ = {
  map: require('lodash/map'),
  uniqBy: require('lodash/uniqBy'),
  each: require('lodash/each'),
}

const Radar = require('../models/radar')
const Quadrant = require('../models/quadrant')
const Ring = require('../models/ring')
const Blip = require('../models/blip')
const GraphingRadar = require('../graphing/radar')
const { getGraphSize, graphConfig } = require('../graphing/config')
const config = require('../config')
const configResult = config()
// #region agent log
fetch('http://127.0.0.1:7242/ingest/c55d8f9b-e738-4e94-a1fc-550ceba6989a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'src/util/factoryExports.js:23',message:'FactoryExports config check',data:{hasFeatureToggles:'featureToggles' in configResult,configKeys:Object.keys(configResult)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
// #endregion
const featureToggles = configResult?.featureToggles || {}

function validateInputQuadrantOrRingName(allQuadrantsOrRings, quadrantOrRing) {
  const quadrantOrRingNames = Object.keys(allQuadrantsOrRings)
  const regexToFixLanguagesAndFrameworks = /(-|\s+)(and)(-|\s+)|\s*(&)\s*/g
  const formattedInputQuadrant = quadrantOrRing.toLowerCase().replace(regexToFixLanguagesAndFrameworks, ' & ')
  return quadrantOrRingNames.find((quadrantOrRing) => quadrantOrRing.toLowerCase() === formattedInputQuadrant)
}

const plotRadarGraph = async function (title, blips, currentRadarName, alternativeRadars) {
  // #region agent log
  if (typeof fetch !== 'undefined') {
    fetch('http://127.0.0.1:7242/ingest/c55d8f9b-e738-4e94-a1fc-550ceba6989a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'src/util/factoryExports.js:36',message:'plotRadarGraph entry',data:{hasTitle:!!title,hasBlips:!!blips,featureTogglesUndefined:featureToggles===undefined,featureTogglesType:typeof featureToggles,hasUIRefresh:'UIRefresh2022' in (featureToggles||{})},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'I'})}).catch(()=>{});
  }
  // #endregion
  const d3 = await getD3()
  
  if (typeof document !== 'undefined') {
    document.title = title.replace(/.(csv|json)$/, '')
  }

  d3.selectAll('.loading').remove()

  const ringMap = graphConfig.rings.reduce((allRings, ring, index) => {
    allRings[ring] = new Ring(ring, index)
    return allRings
  }, {})

  const quadrants = graphConfig.quadrants.reduce((allQuadrants, quadrant) => {
    allQuadrants[quadrant] = new Quadrant(quadrant)
    return allQuadrants
  }, {})

  blips.forEach((blip) => {
    const currentQuadrant = validateInputQuadrantOrRingName(quadrants, blip.quadrant)
    const ring = validateInputQuadrantOrRingName(ringMap, blip.ring)
    if (currentQuadrant && ring) {
      const blipObj = new Blip(
        blip.name,
        ringMap[ring],
        blip.isNew.toLowerCase() === 'true',
        blip.status,
        blip.topic,
        blip.description,
      )
      quadrants[currentQuadrant].add(blipObj)
    }
  })

  const radar = new Radar()
  radar.addRings(Object.values(ringMap))

  _.each(quadrants, function (quadrant) {
    radar.addQuadrant(quadrant)
  })

  alternativeRadars.forEach(function (sheetName) {
    radar.addAlternative(sheetName)
  })

  radar.setCurrentSheet(currentRadarName)

  const graphSize = typeof window !== 'undefined' && window.innerHeight - 133 < 620 ? 620 : window.innerHeight - 133
  // #region agent log
  if (typeof fetch !== 'undefined') {
    fetch('http://127.0.0.1:7242/ingest/c55d8f9b-e738-4e94-a1fc-550ceba6989a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'src/util/factoryExports.js:85',message:'Before accessing featureToggles.UIRefresh2022',data:{featureTogglesUndefined:featureToggles===undefined,featureTogglesNull:featureToggles===null,featureTogglesType:typeof featureToggles,hasUIRefresh:'UIRefresh2022' in (featureToggles||{})},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'J'})}).catch(()=>{});
  }
  // #endregion
  const size = featureToggles?.UIRefresh2022 ? getGraphSize() : graphSize
  const graphingRadar = new GraphingRadar(size, radar)
  await graphingRadar.init()
  await graphingRadar.plot()
}

module.exports = {
  plotRadarGraph,
}
