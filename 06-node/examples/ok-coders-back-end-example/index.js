exports.hello = function() {
  console.log("Hello!")
}

exports.forEach = function(collection, callback) {
  for(i = 0; i < collection.length; ++i) {
    callback(collection[i])
  }
}
