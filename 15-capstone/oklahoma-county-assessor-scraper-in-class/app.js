var request = require('request')
var cheerio = require('cheerio')
var _ = require('lodash')

var minMapNumber = 1001
var maxMapNumber = 4944
var sampleMapNumber = 2713

var currentMapNumber
var numberOfTimesCalled = 0
var currentState

queryMapNumber(sampleMapNumber, false, 1, "")

function queryMapNumber(mapNumber, nextPage, page, state) {
  numberOfTimesCalled++
  console.log('times called: ', numberOfTimesCalled, 'page: ', page)
  currentMapNumber = mapNumber
  var url = 'http://www.oklahomacounty.org/assessor/Searches/MapNumber.asp'
  var method = 'POST'

  if (nextPage) {
    var form = {
      fpdbr_0_PagingMove: "  >   ",
      Map: mapNumber
    }
  } else {
    var form = { Map: mapNumber }
  }

  if (state) {
    var headers = {
      Cookie: state
    }
  } else {
    var headers = {}
  }
  var options = {
    url: url,
    method: method,
    form: form,
    headers: headers
  }

  request(options, mapQueryCallback)
}

function mapQueryCallback(err, res, body) {
  if (err) {
    console.log('error!', err)
  } else {
    console.log('statusCode: ', res.statusCode)
    if (res.statusCode == 200) {
      if (!currentState) {
        currentState = _.replace(res.headers['set-cookie'][0], ' path=/', '')
      }
      console.log(currentState)
      gatherAccountNo(body)
    }
  }
}

function gatherAccountNo(body) {
  var $ = cheerio.load(body)
  var accountNoElements = $('a[href*="ACCOUNTNO"]')
  var accountNumbers = _.map(accountNoElements, elem => elem.attribs.href)
  console.log(`discovered ${accountNumbers.length} account links!`)

  var currentPageInfo = pageInfo($)
  if (currentPageInfo.pagesLeft > 0) {
    queryMapNumber(currentMapNumber, true, currentPageInfo.currentPage + 1, currentState)
  } else {
    console.log('no more pages!')
  }
}

function pageInfo(body) {
  var pageSummary = _.trim(body('nobr').text())
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
