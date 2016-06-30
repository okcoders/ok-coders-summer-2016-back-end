exports.forEach = function(collection, callback) {
  for(i = 0; i < collection.length; i++) {
    callback(collection[i])
  }
}

exports.chicken = 'duck'

exports.whatever = 'whatever'
