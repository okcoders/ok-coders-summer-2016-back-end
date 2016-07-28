var accountNumberDetail = require('./accountNumberDetail')

function upsert(item, callback) {
  accountNumberDetail.findOneAndUpdate(
    {accountNumber: item.accountNumber},
    {accountNumber: item.accountNumber,
      physicalAddress: item.physicalAddress},
    {upsert: true},
    callback
  )
}

module.exports = {
  upsert: upsert
}

