var request = require('request')
var cheerio = require('cheerio')
var _ = require('lodash')
var accountNumberModule = require('../parsers/accountNumber')
var pageInfoModule = require('../parsers/pageInfo')

function loopOverMaps(number, maxMapNumber) {
  if(number <= maxMapNumber) {
    console.log('starting scrape for mapNumber:', number)
    scrape(number)
  }
}

function scrape(scrapeNumber) {
  var currentMapNumber
  var currentState
  var accountNumberCollector
  var goodCookie
  var goodParsedCookie
  var jar = request.jar()
  function sleepTime() {
    var ran = Math.random() * 10000
    console.log(ran)
    return ran
  }
  var headers = {
        Accept:'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Encoding':'gzip, deflate, sdch',
        'Accept-Language':'en-US,en;q=0.8',
        Connection:'keep-alive',
        Host:'www.oklahomacounty.org',
        Referer: 'https://www.google.com/',
        'Upgrade-Insecure-Requests':'1',
        'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
        Cookie: 'nlbi_306289=VTpEJFYsCinsBIgDVY/nZQAAAACzbOJ5TJ3FIKa/j8ArtKpd; __utmt=1; __utma=242048028.498561610.1469505710.1469505710.1469505710.1; __utmb=242048028.1.10.1469505710; __utmc=242048028; __utmz=242048028.1469505710.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); visid_incap_306289=ntHvWY93T1aqb25SJfcTaKrgllcAAAAAQUIPAAAAAAAKv5lCPzEuFNG+MpxIGe1g; incap_ses_168_306289=fvt+L01YHDCoLJGlZttUAqrgllcAAAAAvLDSIsMDG21Dgw8QtCdP7g=='
      }
  getGoodCookie()


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
    var accountNumbers = accountNumberParser.parseAccountNumbers(body)
    console.log(`discovered ${accountNumbers.length} account links!`)
    accountNumberCollector = _.union(accountNumberCollector, accountNumbers)

    var currentPageInfo = pageInfoModule.pageInfo($)
    if (currentPageInfo.pagesLeft > 0) {
      queryMapNumber(currentMapNumber, true, currentPageInfo.currentPage + 1, currentState)
    } else {
      console.log('no more pages!')
      console.log(`I have ${accountNumberCollector.length} account numbers to gather`)
      crawlFoundAccountNumbers(accountNumberCollector)
    }
  }


  function crawlFoundAccountNumbers(numbers) {
    var lastNumber = numbers[numbers.length - 1]
     sleep(sleepTime())
       console.log('account number')
     // requestAccountNumberPage(numbers[3])
    _.each(numbers, number => {
      sleep(3000)
      requestAccountNumberPage(number)
      if (number === lastNumber) {
        loopOverMaps(currentMapNumber + 1)
      }
    })
  }

  function requestAccountNumberPage(accountNumber) {
    var baseUrl = 'http://www.oklahomacounty.org/assessor/Searches/AN-R.asp'
    var method = 'GET'
    var options = {
      url: baseUrl,
      method: method,
      qs: {
        ACCOUNTNO: accountNumber
      },
      headers: headers
    }
    console.log('requesting page for account number: ', accountNumber)
    request(options, parseAccountNumberPage)
  }

  function parseAccountNumberPage(err, res, body) {
    var $ = cheerio.load(body)
      console.log($.html())
    // var account = $('tbody')
    // var accountNumberParent = $('td:contains("Account #:")')
    // var accountNumber = accountNumberParent[1].next.next.children[0].children.data
    // var physicalAddressParent = $('td:contains("Physical Address")')
    // var physicalAddress = physicalAddressParent[1].next.next.children[0].children[0].data
    // var schoolParent = $('td:contains("School System:")')
    // var school = physicalAddressParent[1].next.next.children[0]
    // console.log(school)
    // var taxParent = $('td:contains("Taxable Market")')
    // var tax = physicalAddressParent[1].next.next.children[0]
    // console.log(tax)
  }

  // use if you start getting blocked to test that you are now unblocked
  function testAccountNo() {
    request(
      { url: 'http://www.oklahomacounty.org/assessor/Searches/AN-R.asp',
        qs: {
          ACCOUNTNO: 'R209111030'
        },
      }, function(err, res, data) {
        sleep(sleepTime())
      })
  }

  // start off to get a session
  function getGoodCookie() {
    request({
        url:'http://www.oklahomacounty.org/assessor/',
        headers: headers
      }, function(err, res, data) {
        console.log(data)
      sleep(sleepTime())
    request({
        url:'http://www.oklahomacounty.org/assessor/',
      }, function(err, res, data) {
        console.log(data)
      sleep(sleepTime())
    request({
        url:'http://www.oklahomacounty.org/assessor/Searches/DefaultSearch.asp',
      }, function(err, res, data) {
        console.log(data)
      sleep(sleepTime())
      var url = 'http://www.oklahomacounty.org/assessor/Searches/MapNumber.asp'
      var method = 'POST'
      var form = { Map: Math.random() }
      var options = {
        url: url,
        method: method,
        form: form,
      }

      request(options, function(err, res, data) {
        sleep(sleepTime())
        queryMapNumber(scrapeNumber, false, 1, "")
      })
    })
    })
    })
  }

  function sleep(time) {
      console.log("sleeping")
    var stop = new Date().getTime()
    while(new Date().getTime() < stop + time) {
      ;
    }
      console.log("awake")
  }
}

module.exports = {
  loopOverMaps: loopOverMaps,
  scrape: scrape
}


