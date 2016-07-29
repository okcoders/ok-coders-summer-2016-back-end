var cheerio = require('cheerio')
var request = require('request')
var _ = require('lodash')



var minMapNumber = 1001
var maxMapNumber = 4944
var sampleMapNumber = 2713
queryMapNumber(sampleMapNumber)

function queryMapNumber(mapNumber) {
var url = 'http://www.oklahomacounty.org/assessor/Searches/MapNumber.asp'
var method = 'POST'
var form = { Map: mapNumber }
var options = {
    url: url,
    method: method,
    form: form
    }


request(options, mapQueryCallback)
}

function mapQueryCallback(err, res, body) {
    if (err) {
        console.log("Error! ", err)
    } else {
        console.log('statusCode: ', res.statusCode)
        if (res.statusCode == 200) {
            gatherAccountNo(body)
        }
    }
}

function gatherAccountNo(body) {
    var $ = cheerio.load(body)
    var accountNoElements = $('a[href*=ACCOUNTNO]')
    var accountNumbers = _.map(accountNoElements, elem => elem.attribs.href )
    console.log(accountNumbers)

}
