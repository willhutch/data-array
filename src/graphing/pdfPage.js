// Use dynamic import for d3 since it's ESM
let d3Promise = null
async function getD3() {
  if (!d3Promise) {
    d3Promise = import('d3').then(m => m.default || m)
  }
  return d3Promise
}

const addPdfCoverTitle = async (title) => {
  const d3 = await getD3()
  d3.select('main #pdf-cover-page .pdf-title').text(title)
}

const addRadarLinkInPdfView = async () => {
  const d3 = await getD3()
  d3.select('#generated-radar-link').attr('href', window.location.href)
}

const addQuadrantNameInPdfView = async (order, quadrantName) => {
  const d3 = await getD3()
  d3.select(`.quadrant-table.${order}`)
    .insert('div', ':first-child')
    .attr('class', 'quadrant-table__name')
    .text(quadrantName)
}

module.exports = { addPdfCoverTitle, addQuadrantNameInPdfView, addRadarLinkInPdfView }
