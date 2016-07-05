var _ = require('lodash')
var forEach = require('./forEach.js')
var zachAttack = require('ok-coders-back-end-example')

var kebabed = _.kebabCase('hello world!')

console.log(kebabed)
console.log(forEach)
forEach.forEach(['oh', 'my', 'gosh'], function(i) {console.log(i)})
