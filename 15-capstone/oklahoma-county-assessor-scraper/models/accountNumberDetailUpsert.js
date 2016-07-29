var accountNumberDetail = require('./accountNumberDetail')

function upsert(item, callback) {
  accountNumberDetail.findOneAndUpdate(
    {accountNumber: item.accountNumber},
    {
      physicalAddress: item.physicalAddress,
      taxableMarket: item.taxableMarket,
      schoolDistrict: item.schoolDistrict
    },
    {upsert: true},
    callback
  )
}

module.exports = {
  upsert: upsert
}

