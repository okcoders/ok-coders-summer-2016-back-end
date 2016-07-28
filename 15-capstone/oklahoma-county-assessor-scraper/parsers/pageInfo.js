var cheerio = require('cheerio')
var _ = require('lodash')

function pageInfo(body) {
  var $ = cheerio.load(body)
  var pageSummary = _.trim($('nobr').text())
  if (pageSummary) {
    var pattern = /\[(.*)\/(.*)\]/
    var matches = pageSummary.match(pattern)
    var currentPage = +(matches[1])
    var totalPages = +(matches[2])
  } else {
    var currentPage = 1
    var totalPages = 1
  }

  return {
    currentPage: currentPage,
    totalPages: totalPages,
    pagesLeft: totalPages - currentPage
  }
}

module.exports = {
  pageInfo: pageInfo
}
