var request = require('request')
var cheerio = require('cheerio')
var _ = require('lodash')

var minRange = 1001
var maxRange = 4944
var samplePage = 2713

var currentMapNumber
var currentPage
var currentState
var numberOfCalls = 0 // sorry

queryMap(samplePage, '', false, 1)

function queryMap(mapNumber, state, movePage, page) {
  numberOfCalls++
  currentMapNumber = mapNumber
  currentPage = page
  currentState = state

  var url = 'http://www.oklahomacounty.org/assessor/Searches/MapNumber.asp'
  if (state) {
    var headers = { Cookie: state }
  }
  if (movePage) {
    var form = { Map: mapNumber, fpdbr_0_PagingMove: "  >   " }
  } else {
    var form = { Map: mapNumber }
  }
  var options = {
    url: url,
    method: 'POST',
    form: form,
    headers: headers
  }

  console.log(`Bout to try and query ${url} for map: ${mapNumber}, page: ${page}`)
  request(options, _queryMapCallback)
}

function _queryMapCallback(err, res, body) {
  if (err) {
    console.log('error!', err)
  } else {
    if (!currentState) {
      currentState = _.replace(res.headers['set-cookie'][0], '; path=/', '')
    }
    console.log(currentState)
    getAccountNo(body)
  }
}

function getAccountNo(body, state) {
  var $ = cheerio.load(body)
  var accountLinkObjects = $('a[href*="ACCOUNTNO"]')
  var accountLinks = _.map(accountLinkObjects, link => link.attribs.href)
  console.log(`discovered ${accountLinks.length} links`)

  var currentPageProfile = pageProfile($)
  if (currentPageProfile.pagesLeft > 0) {
    console.log('got some more pages!')
    syncQueryNextPage(currentPageProfile.currentPage + 1)
  } else {
    console.log('no more pages!')
  }
}

function pageProfile($) {
  var pages = _.trim($('nobr').text())
  if (pages) {
    var pattern = /\[(.*)\/(.*)\]/
    var match = pages.match(pattern)
    var currentPage = +match[1]
    var totalPages = +match[2]
    return {
      currentPage: currentPage,
      totalPages: totalPages,
      pagesLeft: totalPages - currentPage
    }
  } else {
    return {currentPage: 1, totalPages: 1, pagesLeft: 0 }
  }
}

function syncQueryNextPage(nextPage) {
  // really ugly, but meh
  // way the site works we must send the state that is stored in the cookie, so
  // I have to keep the calls in sync, and have to set some globals
  while ((nextPage - numberOfCalls) != 1) {
  }
  queryMap(currentMapNumber, currentState, true, nextPage)
}


