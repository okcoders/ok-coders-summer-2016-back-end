var express = require('express')
var router = express.Router()
var Emails = require('../models/emails.js')

router.get('/', getCallback)
router.get('/length', getLengthCallback)
router.get('/bob', getBobCallback)

function getCallback(req, res) {
  Emails.find(function(err, data) {
    if (err) {
      res.send("error!")
    } else {
      res.json(data)
    }
  })
}

function getLengthCallback(req, res) {
  var query = Emails.find()
  query
    .count()
    .exec(function(err, data) {
      if (err) {
        res.send("error!")
      } else {
        res.json(data)
      }
    })
}

function getBobCallback(req, res) {
  var query = Emails.find()
  query
    .where('sender').regex(/bob/)
    .exec(function(err, data) {
      if (err) {
        res.send("error!")
      } else {
        res.json(data)
      }
    })
}

module.exports = router
