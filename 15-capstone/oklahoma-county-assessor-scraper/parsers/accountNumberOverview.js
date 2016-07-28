var cheerio = require('cheerio')
var _ = require('lodash')

function parseAccountNumbers(body) {
  var $ = cheerio.load(body)
  var accountNoElements = $('a[href*="ACCOUNTNO"]')
  var accountNumbers = _.map(accountNoElements, elem => {
    return _.replace(elem.attribs.href, 'AN-R.asp?ACCOUNTNO=', '')
  })
  return accountNumbers
}

module.exports = {
  parseAccountNumbers: parseAccountNumbers
}
