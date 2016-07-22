var mongoose = require('mongoose')
var Schema = mongoose.Schema

// the types we define below are mainly used when we save documents
var schema = new Schema({
  sender: String,
  // array
  recipients: [],
  cc: [],
  text: String,
  mid: String,
  fpath: String,
  bcc: [],
  to: [],
  // mixed basically means anything can be there
  replyto: Schema.Types.Mixed,
  ctype: String,
  // prevent the folder attribute from being a part of find statements
  folder: {type: String, select: false},
  fname: String,
  date: Date,
  subject: String
})

var Emails = mongoose.model('emails', schema);

module.exports = Emails
