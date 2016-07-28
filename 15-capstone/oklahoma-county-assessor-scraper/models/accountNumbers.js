var mongoose = require('mongoose')
var Schema  = mongoose.Schema

var accountNumbers = new Schema({
  accountNumber: String
})

module.exports = mongoose.model('account_numbers', accountNumbers)
