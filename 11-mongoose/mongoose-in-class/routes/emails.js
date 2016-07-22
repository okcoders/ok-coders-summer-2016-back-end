var express = require('express');
var router = express.Router();
var Emails = require('../models/emails.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  Emails
    .find()
    .exec(function(err, data) {
      if (err) {
        res.send("oops! db error")
      } else {
        res.json(data)
      }
    })
})

router.get('/:sender', function(req, res, next) {
  Emails
    .where('sender').regex(new RegExp(req.params.sender, 'i'))
    .exec(function(err, data) {
      if (err) {
        res.send("oops! db error")
      } else {
        res.json(data)
      }
    })
})

module.exports = router;
