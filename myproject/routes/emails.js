var express = require('express');
var router = express.Router();
var Emails = require('../models/emails');

router.get('/', function(req, res, next) {
    Emails
        .find()
        .limit(10)
        .exec( function(err,data) {
        if (err) {
        res.send('error!')
    } else {
        res.json(data)
    }})
  res.send('in emails route');
});



function generalCallback(err,data) {

}

module.exports = router;
