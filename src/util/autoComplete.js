const $ = require('jquery')
require('jquery-ui/ui/widgets/autocomplete')

const config = require('../config')
let configResult
let featureToggles
try {
  configResult = config()
  featureToggles = (configResult && configResult.featureToggles) ? configResult.featureToggles : {}
} catch (e) {
  configResult = null
  featureToggles = {}
}
// Ensure featureToggles is always an object at module level
if (!featureToggles || typeof featureToggles !== 'object') {
  featureToggles = {}
}

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
