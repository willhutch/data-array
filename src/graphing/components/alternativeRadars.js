// Use dynamic import for d3 since it's ESM
let d3Promise = null
async function getD3() {
  if (!d3Promise) {
    d3Promise = import('d3').then(m => m.default || m)
  }
  return d3Promise
}

const { constructSheetUrl } = require('../../util/urlUtils')

async function renderAlternativeRadars(radarFooter, alternatives, currentSheet) {
  const d3 = await getD3()
  const alternativesContainer = radarFooter.append('div').classed('alternative-radars', true)

  for (let i = 0; alternatives.length > 0; i++) {
    const list = alternatives.splice(0, 5)

    const alternativesList = alternativesContainer
      .append('ul')
      .classed(`alternative-radars__list`, true)
      .classed(`alternative-radars__list__row-${i}`, true)

    list.forEach(function (alternative) {
      const alternativeListItem = alternativesList.append('li').classed('alternative-radars__list-item', true)

      alternativeListItem
        .append('a')
        .classed('alternative-radars__list-item-link', true)
        .attr('href', constructSheetUrl(alternative))
        .attr('role', 'tab')
        .text(alternative)

      if (currentSheet === alternative) {
        alternativeListItem.classed('active', true)

        d3.selectAll('.alternative-radars__list-item a').attr('aria-selected', null)
        alternativeListItem.select('a').attr('aria-selected', 'true')
      }
    })
  }
}

module.exports = {
  renderAlternativeRadars,
}
