function higherOrder(name, callback) {
  return callback(name)
}

function lowerAndSub(str) {
  return str.toLowerCase().substring(0, 2)
}

var name = 'Zach'
var upperAndSub = function(str) {
  return str.toUpperCase().substring(0, 3)
}

var loweredName = higherOrder('Zach', lowerAndSub)
var upperName = higherOrder('zach', function(name) {
  return name.toUpperCase().substring(0, 3)
})

var upperName = higherOrder('zach', name => {
  return name.toUpperCase().substring(0, 3)
})

console.log(upperName)

