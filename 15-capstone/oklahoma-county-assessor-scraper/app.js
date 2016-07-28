var mongoose = require('mongoose')
var _ = require('lodash')
var mapNumber = require('./scrapers/mapNumber')
var accountNumber = require('./scrapers/accountNumber')
var accountNumbers = require('./models/accountNumbers')

mongoose.connect('mongodb://localhost/oklahoma')
var db = mongoose.connection

db.on('error', function() {
  console.log('db open error')
})

db.once('open', function() {
  console.log('connection success')
  var action = process.argv[2]
  if (action === 'overview') {
    var minMapNumber = 1100
    var maxMapNumber = 4944
    mapNumber.loopOverMaps(minMapNumber, maxMapNumber)
  } else if (action === 'detail') {
    accountNumbers.find({}, allAccountNumbersCallback)
  }
})

function allAccountNumbersCallback(err, data) {
  if (err) {
    console.log('error!', err)
  } else {
    console.log(data.length)
    accountNumber.loopOverAccountNumbers(_.map(data, d => d.accountNumber))
  }
}
