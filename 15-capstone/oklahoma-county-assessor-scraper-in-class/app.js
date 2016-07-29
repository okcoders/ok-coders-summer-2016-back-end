var request = require('request')
var cheerio = require('cheerio')
var _ = require('lodash')

var minMapNumber = 1001
var maxMapNumber = 4944
var sampleMapNumber = 2713

loopOverMapNumbers(minMapNumber, maxMapNumber)

function loopOverMapNumbers(number, maxNumber) {
  if (number <= maxNumber) {
    console.log('starting to query map number:', number)
    scrape(number)
  } else {
    console.log('done with all the numbers')
  }
}

function scrape(mapNumber) {
  var currentMapNumber
  var numberOfTimesCalled = 0
  var currentState
  var accountNumberGatherer = []

  queryMapNumber(mapNumber, false, 1, "")

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

  // after getting back body from request, we pass it to this function so that
  // cheerio can pull out the links that we are interested in. It also, if there
  // is multiple pages, continues to walk those pages with subsequent requests
  function gatherAccountNo(body) {
    var $ = cheerio.load(body)
    var accountNoElements = $('a[href*="ACCOUNTNO"]')
    var accountNumbers = _.map(accountNoElements, elem => {
      return _.trim(elem.children[1].children[0].data)
    })
    accountNumberGatherer = _.union(accountNumberGatherer, accountNumbers)
    console.log(`discovered ${accountNumbers.length} account links!`)

    var currentPageInfo = pageInfo($)
    if (currentPageInfo.pagesLeft > 0) {
      queryMapNumber(currentMapNumber, true, currentPageInfo.currentPage + 1, currentState)
    } else {
      console.log('no more pages!')
      console.log(`I have ${accountNumberGatherer.length} account links to gather`)

      crawlAccountNumbers(accountNumberGatherer)
      // loopOverMapNumbers(currentMapNumber + 1, maxMapNumber)
    }
  }

  function crawlAccountNumbers(accountNumbers) {
    _.each(accountNumbers, accountNumber => {
      queryAccountNumber(accountNumber)
    })
  }

  function queryAccountNumber(accountNumber) {
    var baseUrl = 'http://www.oklahomacounty.org/assessor/Searches/AN-R.asp'
    var options = {
      url: baseUrl,
      method: 'GET',
      qs: {
        ACCOUNTNO: accountNumber
      }
    }
    request(options, accountNumberCallback)
  }

  function accountNumberCallback(err, res, data) {
    console.log('data from account number query:')
    console.log(data)
  }

  // function that takes the body, finds the page info section at the bottom,
  // parses it, and returns information about it
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
}
