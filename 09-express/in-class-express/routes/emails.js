var express = require('express')
var router = express.Router()
var Emails = require('../models/emails.js')

router.get('/', getCallback)
router.get('/length', getLengthCallback)
router.get('/bob', getBobCallback)
router.post('/:sender', postSenderCallback)
router.get('/:id', getIdCallback)
router.delete('/:id', deleteIdCallback)

function getCallback(req, res) {
  Emails
    .find()
    .select()
    .exec(function(err, data) {
    if (err) {
      res.send("error!")
    } else {
      res.json(data)
    }
  })
}

function getIdCallback(req, res) {
  Emails
    .where('_id').equals(req.params.id)
    .exec(function (err, data) {
      if (err) {
        res.send("error!")
      } else {
        res.json(data)
      }
    })
}

function deleteIdCallback(req, res) {
  Emails
    .find()
    .where('_id').equals(req.params.id)
    .remove()
    .exec(function (err, data) {
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

function postSenderCallback(req, res) {
  var newEmail = new Emails({sender: req.params.sender})
  console.log(newEmail)
  newEmail.test = 'chicken'
  newEmail.save(function(err, data) {
    if (err) {
      console.log('error saving!', err)
      res.send('error!')
    } else {
      res.send('saved ' + data + 'to the database')
    }
  })
}

function getBobCallback(req, res) {
  var query = Emails.find()
  query
    .select()
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
