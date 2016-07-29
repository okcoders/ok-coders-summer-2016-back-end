var accountNumbers = require('./accountNumbers')
var _ = require('lodash')

function batch(numbers, callback, finalCallback) {
  var last = _.last(numbers)
  _.each(numbers, number => {
    console.log('inserting', number)
    accountNumbers.findOneAndUpdate(
      {accountNumber: number},
      {accountNumber: number},
      {upsert: true},
      callback
    )
    if (number === last) {
      finalCallback()
    }
  })
}

module.exports = {
  batch: batch
}
