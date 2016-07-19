var express = require('express');
var router = express.Router();
var Emails = require('../models/emails')

router.get('/', function(req, res, next) {
  Emails
    .find()
    .limit(10)
    .exec(function(err, data) {
      if (err) {
        res.send('error!')
      } else {
        res.json(data)
      }
    })
})

router.put('/:id', function(req, res, next) {
  Emails
    .where('_id').equals(req.params.id)
    .update({$set: {sender: 'duck!'}})
    .exec(function(err, data) {
      if (err) {
        res.send('error!')
      } else {
        res.json(data)
      }
    })
})

router.delete('/:id', function(req, res, next) {
  Emails
    .where('_id').equals(req.params.id)
    .remove()
    .exec(function(err, data) {
      if (err) {
        res.send('error!')
      } else {
        res.json(data)
      }
    })
})

router.get('/:id', function(req, res, next) {
  Emails
    .where('_id').equals(req.params.id)
    .exec(function(err, data) {
      if (err) {
        res.send('error!')
      } else {
        res.json(data)
      }
    })
})

router.post('/:sender', function(req, res, next) {
  var email = new Emails({sender: req.params.sender})
  email.text = 'hello!'
  email.save(function(err, data) {
    if (err) {
      res.send('error!')
    } else {
      res.json(data)
    }
  })
})

module.exports = router;
