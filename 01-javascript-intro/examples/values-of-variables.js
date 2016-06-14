// look up how to get parameters from the command line with nodejs. Use that to
// give values to these variables

var nameOfCurrentFile = "values-of-variables.js"// name of current file, i.e values-of-variables.js (get it from the command line)

var pi = prompt("enter pi") // get this from the command line

var radius = prompt("enter radius")// get this from the command line (just pick some arbitrary number)

var area = pi * sq(radius)// fill in the equation utilizing the above variables
console.log(area)
var cirumference = 2 * pi * radius// fill in the equation utilizing the above variables
console.log(circumference)

