// Use dynamic import for d3 since it's ESM
let d3Promise = null
async function getD3() {
  if (!d3Promise) {
    d3Promise = import('d3').then(m => m.default || m)
  }
  return d3Promise
}

const config = require('../../config')
const { addPdfCoverTitle } = require('../pdfPage')
const configResult = config()
const featureToggles = configResult?.featureToggles || {}

async function renderBanner(renderFullRadar) {
  const d3 = await getD3()
  if (featureToggles?.UIRefresh2022) {
    const documentTitle = document.title[0].toUpperCase() + document.title.slice(1)

    document.title = documentTitle
    d3.select('.hero-banner__wrapper').append('p').classed('hero-banner__subtitle-text', true).text(document.title)
    d3.select('.hero-banner__title-text').on('click', renderFullRadar)

    await addPdfCoverTitle(documentTitle)
  } else {
    const header = d3.select('body').insert('header', '#radar')
    header
      .append('div')
      .attr('class', 'radar-title')
      .append('div')
      .attr('class', 'radar-title__text')
      .append('h1')
      .text(document.title)
      .style('cursor', 'pointer')
      .on('click', renderFullRadar)

    header
      .select('.radar-title')
      .append('div')
      .attr('class', 'radar-title__logo')
      .html('<a href="https://www.thoughtworks.com"> <img src="/images/logo.png" /> </a>')
  }
}

module.exports = {
  renderBanner,
}
