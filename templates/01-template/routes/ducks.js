var express = require('express')
var router = express.Router()

router.use(function(req, res, next) {
  console.log("quack")
  next()
})

router.get('/', genericCallback)
router.get('/:id', paramCallback)
router.get('/:id/:test/:temp', paramCallback)

function genericCallback(req, res) {
  res.send("in a new file now, but still a duck")
}

function paramCallback(req, res) {
  res.send(req.params.id + req.params.test + req.params.temp)
}
module.exports = router
