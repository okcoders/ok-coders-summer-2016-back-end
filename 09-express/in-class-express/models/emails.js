var mongoose = require('mongoose')
var Schema = mongoose.Schema

var schema = new Schema({
  _id: Schema.Types.ObjectId,
  sender: String,
  recipients: [],
  cc: [],
  text: String,
  mid: String,
  fpath: String,
  bcc: [],
  to: [],
  replyto: Schema.Types.Mixed,
  ctype: String,
  fname: String,
  date: Date,
  subject: String
})

var Emails = mongoose.model('emails', schema);

module.exports = Emails
