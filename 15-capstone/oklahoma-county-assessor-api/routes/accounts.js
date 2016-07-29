var express = require('express');
var router = express.Router();
var accountNumberDetail = require('../models/accountNumberDetail')

router.get('/', function(req, res, next) {
  accountNumberDetail.find({}, function(err, data) {
    res.json(data)
  })
})

module.exports = router;
