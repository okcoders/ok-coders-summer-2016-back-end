// look up how to get parameters from the command line with nodejs. Use that to
// give values to these variables
var filePath = process.argv[1]
var fileName = filePath.replace(/.*\//, '')

console.log(fileName)

var pi = +(process.argv[2])
console.log(pi)
pi = Math.PI
console.log(pi)
var radius = +(process.argv[3])


var area = pi * Math.pow(radius, 2)
console.log(area)
var circumference = 2 * pi * radius
console.log(circumference)

