var express = require('express');
var router = express.Router();

/* GET ducks listing. */
router.get('/', function(req, res, next) {
  res.send('only ducks');
});

router.get('/:id', function(req, res, next) {
  res.send(req.params.id);
});



module.exports = router;
