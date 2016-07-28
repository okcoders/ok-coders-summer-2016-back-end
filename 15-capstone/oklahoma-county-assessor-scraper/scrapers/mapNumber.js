var request = require('request')
var cheerio = require('cheerio')
var _ = require('lodash')

var accountNumberOverviewParser = require('../parsers/accountNumberOverview')
var pageInfoParser = require('../parsers/pageInfo')
var accountNumberScraper = require('./accountNumber')
var sleep = require('./sleep')
var batchUpsertAccountNumbers = require('../models/batchUpsertAccountNumbers')

function loopOverMaps(number, maxMapNumber) {
  if(number <= maxMapNumber) {
    console.log('starting scrape for mapNumber:', number)
    scrape(number, maxMapNumber)
  }
}

function scrape(scrapeNumber, maxMapNumber) {
  var currentMapNumber
  var currentState
  var accountNumberCollector

  function queryMapNumber(mapNumber, nextPage, page, state) {
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

    console.log('requesting map number:', mapNumber, 'page: ', page)
    request(options, mapQueryCallback)
  }

  function mapQueryCallback(err, res, body) {
    if (err) {
      console.log('error!', err)
    } else {
      if (res.statusCode == 200) {
        if (!currentState) {
          currentState = _.replace(res.headers['set-cookie'][0], /;.*/, '')
          currentState = _.map(res.headers['set-cookie'], c => _.replace(c, /;.*/, '')).join('; ')
        }
        gatherAccountNo(body)
      }
    }
  }

  function gatherAccountNo(body) {
    var accountNumbers = accountNumberOverviewParser.parseAccountNumbers(body)
    console.log(`discovered ${accountNumbers.length} account links!`)
    accountNumberCollector = _.union(accountNumberCollector, accountNumbers)

    var currentPageInfo = pageInfoParser.pageInfo(body)
    if (currentPageInfo.pagesLeft > 0) {
      queryMapNumber(currentMapNumber, true, currentPageInfo.currentPage + 1, currentState)
    } else {
      console.log('no more pages!')
      console.log(`I found ${accountNumberCollector.length} account numbers`)
      if (accountNumberCollector.length > 0) {
        batchUpsertAccountNumbers.batch(accountNumberCollector, upsertCallback, finalCallback)
      } else {
        finalCallback()
      }

      // crawlFoundAccountNumbers(accountNumberCollector)
    }
  }

  function upsertCallback(err, data) {
    if (err) {
      console.log('error inserting!', err)
    }
  }

  function finalCallback() {
    loopOverMaps(currentMapNumber + 1, maxMapNumber)
  }


  function crawlFoundAccountNumbers(numbers) {
    accountNumberScraper.loopOverAccountNumbers(numbers)
    // loopOverMaps(currentMapNumber + 1, maxMapNumber)
  }

  // start the thing
  queryMapNumber(scrapeNumber, false, 1, "")
}

module.exports = {
  loopOverMaps: loopOverMaps,
  scrape: scrape
}


