const $ = require('jquery')
require('jquery-ui/ui/widgets/autocomplete')

const config = require('../config')
let configResult
let featureToggles
// #region agent log
if (typeof fetch !== 'undefined') {
  fetch('http://127.0.0.1:7242/ingest/c55d8f9b-e738-4e94-a1fc-550ceba6989a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'src/util/autoComplete.js:7',message:'Module initialization start',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run2',hypothesisId:'M'})}).catch(()=>{});
}
// #endregion
try {
  configResult = config()
  // #region agent log
  if (typeof fetch !== 'undefined') {
    fetch('http://127.0.0.1:7242/ingest/c55d8f9b-e738-4e94-a1fc-550ceba6989a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'src/util/autoComplete.js:11',message:'After config() call',data:{hasConfigResult:!!configResult,configResultType:typeof configResult,hasFeatureToggles:configResult && 'featureToggles' in configResult},timestamp:Date.now(),sessionId:'debug-session',runId:'run2',hypothesisId:'M'})}).catch(()=>{});
  }
  // #endregion
  featureToggles = (configResult && configResult.featureToggles) ? configResult.featureToggles : {}
} catch (e) {
  // #region agent log
  if (typeof fetch !== 'undefined') {
    fetch('http://127.0.0.1:7242/ingest/c55d8f9b-e738-4e94-a1fc-550ceba6989a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'src/util/autoComplete.js:17',message:'Config initialization error',data:{errorMessage:e.message,errorName:e.name},timestamp:Date.now(),sessionId:'debug-session',runId:'run2',hypothesisId:'M'})}).catch(()=>{});
  }
  // #endregion
  configResult = null
  featureToggles = {}
}
// Ensure featureToggles is always an object at module level
if (!featureToggles || typeof featureToggles !== 'object') {
  featureToggles = {}
}
// #region agent log
if (typeof fetch !== 'undefined') {
  fetch('http://127.0.0.1:7242/ingest/c55d8f9b-e738-4e94-a1fc-550ceba6989a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'src/util/autoComplete.js:24',message:'Module initialization complete',data:{featureTogglesUndefined:featureToggles===undefined,featureTogglesNull:featureToggles===null,featureTogglesType:typeof featureToggles,isObject:typeof featureToggles==='object',hasUIRefresh:'UIRefresh2022' in (featureToggles||{})},timestamp:Date.now(),sessionId:'debug-session',runId:'run2',hypothesisId:'M'})}).catch(()=>{});
}
// #endregion

$.widget('custom.radarcomplete', $.ui.autocomplete, {
  _create: function () {
    this._super()
    this.widget().menu('option', 'items', '> :not(.ui-autocomplete-quadrant)')
  },
  _renderMenu: function (ul, items) {
    let currentQuadrant = ''

    items.forEach((item) => {
      const quadrantName = item.quadrant.quadrant.name()
      if (quadrantName !== currentQuadrant) {
        ul.append(`<li class='ui-autocomplete-quadrant'>${quadrantName}</li>`)
        currentQuadrant = quadrantName
      }
      const li = this._renderItemData(ul, item)
      if (quadrantName) {
        li.attr('aria-label', `${quadrantName}:${item.value}`)
      }
    })
  },
})

const AutoComplete = (el, quadrants, cb) => {
  // Console log for debugging - will show in browser console
  if (typeof console !== 'undefined') {
    console.log('[autoComplete.js] AutoComplete called', {
      featureToggles,
      featureTogglesType: typeof featureToggles,
      featureTogglesUndefined: featureToggles === undefined
    })
  }
  // #region agent log
  if (typeof fetch !== 'undefined') {
    fetch('http://127.0.0.1:7242/ingest/c55d8f9b-e738-4e94-a1fc-550ceba6989a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'src/util/autoComplete.js:30',message:'AutoComplete called',data:{featureTogglesUndefined:featureToggles===undefined,featureTogglesNull:featureToggles===null,featureTogglesType:typeof featureToggles,hasUIRefresh:'UIRefresh2022' in (featureToggles||{})},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'K'})}).catch(()=>{});
  }
  // #endregion
  const blips = quadrants.reduce((acc, quadrant) => {
    return [...acc, ...quadrant.quadrant.blips().map((blip) => ({ blip, quadrant }))]
  }, [])

  // Ensure featureToggles is defined - defensive check with explicit fallback
  let safeFeatureToggles
  if (typeof featureToggles !== 'undefined' && featureToggles !== null && typeof featureToggles === 'object') {
    safeFeatureToggles = featureToggles
  } else {
    try {
      const cfg = config()
      safeFeatureToggles = (cfg && cfg.featureToggles) ? cfg.featureToggles : {}
    } catch (e) {
      safeFeatureToggles = {}
    }
  }
  // #region agent log
  if (typeof fetch !== 'undefined') {
    fetch('http://127.0.0.1:7242/ingest/c55d8f9b-e738-4e94-a1fc-550ceba6989a',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'src/util/autoComplete.js:47',message:'After safeFeatureToggles setup',data:{safeFeatureTogglesUndefined:safeFeatureToggles===undefined,safeFeatureTogglesType:typeof safeFeatureToggles,hasUIRefresh:safeFeatureToggles && 'UIRefresh2022' in safeFeatureToggles},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'L'})}).catch(()=>{});
  }
  // #endregion
  // Console log for debugging - will show in browser console
  if (typeof console !== 'undefined') {
    console.log('[autoComplete.js] safeFeatureToggles check:', {
      safeFeatureToggles,
      hasSafeFeatureToggles: !!safeFeatureToggles,
      hasUIRefresh: safeFeatureToggles ? !!safeFeatureToggles.UIRefresh2022 : false
    })
  }
  // Ultimate defensive check - ensure safeFeatureToggles is never undefined
  if (!safeFeatureToggles) {
    safeFeatureToggles = {}
  }
  // Final safety check before accessing UIRefresh2022
  if (typeof safeFeatureToggles === 'undefined' || safeFeatureToggles === null) {
    console.error('[autoComplete.js] ERROR: safeFeatureToggles is undefined/null at line 108', {
      safeFeatureToggles,
      featureToggles,
      configResult
    })
    safeFeatureToggles = {}
  }
  
  // Wrap the critical access in try-catch to catch any unexpected errors
  let shouldUseUIRefresh = false
  try {
    shouldUseUIRefresh = safeFeatureToggles && safeFeatureToggles.UIRefresh2022 === true
    console.log('[autoComplete.js] Line 117 executed successfully:', {
      shouldUseUIRefresh,
      safeFeatureTogglesType: typeof safeFeatureToggles,
      hasUIRefresh: safeFeatureToggles ? 'UIRefresh2022' in safeFeatureToggles : false,
      safeFeatureTogglesValue: safeFeatureToggles
    })
  } catch (error) {
    console.error('[autoComplete.js] CRITICAL ERROR at line 117 accessing UIRefresh2022:', {
      errorMessage: error.message,
      errorStack: error.stack,
      safeFeatureToggles,
      safeFeatureTogglesType: typeof safeFeatureToggles,
      safeFeatureTogglesValue: safeFeatureToggles
    })
    shouldUseUIRefresh = false // Safe default
  }
  
  if (shouldUseUIRefresh) {
    $(el).autocomplete({
      appendTo: '.search-container',
      source: (request, response) => {
        const matches = blips.filter(({ blip }) => {
          const searchable = `${blip.name()} ${blip.description()}`.toLowerCase()
          return request.term.split(' ').every((term) => searchable.includes(term.toLowerCase()))
        })
        response(matches.map((item) => ({ ...item, value: item.blip.name() })))
      },
      select: cb.bind({}),
    })
  } else {
    $(el).radarcomplete({
      source: (request, response) => {
        const matches = blips.filter(({ blip }) => {
          const searchable = `${blip.name()} ${blip.description()}`.toLowerCase()
          return request.term.split(' ').every((term) => searchable.includes(term.toLowerCase()))
        })
        response(matches.map((item) => ({ ...item, value: item.blip.name() })))
      },
      select: cb.bind({}),
    })
  }
}

module.exports = AutoComplete
