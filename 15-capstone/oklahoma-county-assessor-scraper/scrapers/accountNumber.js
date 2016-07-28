var request = require('request')
var _ = require('lodash')
var headers = require('./baseHeaders')
var sleep = require('./sleep')
var cheerio = require('cheerio')
var accountNumberDetailUpsert = require('../models/accountNumberDetailUpsert')


var jar = request.jar()
var globalAccountNumber
var globalAccountNumbers

function loopOverAccountNumbers(accountNumbers) {
  if (accountNumbers.length > 0) {
    scrape(accountNumbers, accountNumbers.pop())
  }
}

function scrape(accountNumbers, accountNumber) {
  globalAccountNumber = accountNumber
  globalAccountNumbers = accountNumbers

  humanLikeBehavior()
}

function humanLikeBehavior() {
  headers.base.Referer = 'https://www.google.com'
  var options = {
    url: 'https://www.oklahomacounty.org/assessor/',
    headers: headers.base,
    jar: jar
  }
  request(options, function(err, res, body) {
    sleep.sleep()

    var url = 'https://www.oklahomacounty.org/assessor/'
    var options = {
      url: url,
      headers: headers.base,
      jar: jar
    }
    request(options, function(err, res, body) {
      sleep.sleep()
      queryMapNumber(Math.random())
    })
  })
}



function queryMapNumber(mapNumber) {
  var url = 'http://www.oklahomacounty.org/assessor/Searches/MapNumber.asp'
  var method = 'POST'

  var form = { Map: mapNumber }

  var options = {
    url: url,
    method: method,
    form: form,
    headers: headers.base,
    jar: jar
  }

  console.log('requesting map number:', mapNumber)
  request(options, mapQueryCallback)
}

function mapQueryCallback(err, res, data) {
  sleep.sleep()
  requestAccountNumberPage(globalAccountNumber)
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
    headers: headers.base,
    jar: jar
  }
  console.log('requesting page for account number: ', accountNumber)
  request(options, parseAccountNumberPage)
}

function parseAccountNumberPage(err, res, body) {
  var $ = cheerio.load(body)
  var accountNumberParent = $('td:contains("Account #:")')
  var accountNumber = _.trim(accountNumberParent[1].next.next.children[0].children[0].data)
  var physicalAddressParent = $('td:contains("Physical Address")')
  var physicalAddress = _.trim(physicalAddressParent[1].next.next.children[0].children[0].data)
  var schoolParent = $('td:contains("School System:")')
  var school = _.trim(schoolParent[1].next.next.children[0].children[0].data)
  var taxParent = $('td:contains("Taxable Market")')
  var tax = _.trim(taxParent[1].next.next.children[0].children[0].data)
  accountNumberDetailUpsert.upsert(
    { accountNumber: accountNumber,
      physicalAddress: physicalAddress,
      taxableMarket: tax,
      schoolDistrict: school},
    upsertCallback)
}

function upsertCallback(err, data) {
  if (err) {
    console.log('error!')
  }
  loopOverAccountNumbers(globalAccountNumbers)
}

module.exports = {
  scrape: scrape,
  loopOverAccountNumbers: loopOverAccountNumbers
}
