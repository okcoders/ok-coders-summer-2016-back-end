var mongoose = require('mongoose')
var Schema = mongoose.Schema

var emailsSchema = new Schema({
  sender: String,
  recipients: [],
  cc : [],
  text: String,
  mid: String,
  fpath: String,
  bcc: [],
  to: [],
  replyto: String,
  date: Date,
  subject: String
})

module.exports = mongoose.model('emails', emailsSchema)
