var _ = require('lodash')
var forEachFile = require('./forEach')

console.log(forEachFile)

forEachFile.forEach(['oh', 'my', 'gosh'], function(i) { console.log(i) })

var kebabed = _.kebabCase('hello      ok coders!!!!')

console.log(kebabed)

exports.hello = function() {
  console.log('Hellooooo!')
}

exports.forEach = forEachFile.forEach
