var mongoose = require('mongoose')
var Schema  = mongoose.Schema

var accountNumberDetail = new Schema({
  accountNumber: String,
  physicalAddress: String,
  taxableMarket: String,
  schoolDistrict: String
})

module.exports = mongoose.model('account_number_detail', accountNumberDetail)
