function myFirstFunction(myFirstVariable, secondVar) {
  // console.log(`hello world! ${myFirstVariable} and ${secondVar}`)
  return "a string"
}
var temp = [6]
myFirstFunction("Hi!", "Wow!")
myFirstFunction(true, [], {})
myFirstFunction(6, false)
myFirstFunction(null, temp)
myFirstFunction()

var valueFromReturn = myFirstFunction()

// console.log(valueFromReturn)
var newVariable = "not test"
hoisted()
function hoisted() {
  newVariable = "test"
  console.log(newVariable)
}

console.log(notHoisted)
var notHoisted = function() {
  newVariable = "test"
  console.log(newVariable)
}



