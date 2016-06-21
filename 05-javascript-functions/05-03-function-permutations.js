// -------------- no params no return

function lameFunction() {
  console.log("I don't do much")
}

// we can declare function two different ways, one his hoisted, the other isn't
// the below version is not hoisted, and can only be called after it is declared
var lameFunction = function() {
  console.log("I don't do much")
}

lameFunction()

// -------------- params no return

function prettyLameFunction(name) {
  console.log(`at least I am logging different names, like: ${name}`)
}

prettyLameFunction("zach")
prettyLameFunction("gary")

// -------------- params with return (i.e pure function), function with no side
// effects that takes an input and maps it to one and only one output

function prettySweetFunction(name) {
  return name.toUpperCase()
}

console.log(prettySweetFunction("zach"))
console.log(prettySweetFunction("gary"))

// -------------- Functions can take more than one param

function hello(first, last) {
  console.log(`first param: ${first}, last param: ${last}`)
}

hello("zach", "mays")

// -------------- anonymous (wrapped in IIFE)
; // this ; is needed
(function(name) {
  console.log(`at least I am logging different names, like: ${name}`)
})("zach")

// -------------- anonymous rocket (no need for explicit return)

name => name.toUpperCase()

// functions can take in any type, and they can return any type
// i.e a function can take in a string and return a number
// or a function can take in an array and an object and return a boolean
// a function can even take in a function and return a string!
// or take in a string and return a function!

// The craziest thing functions can do is call themselves (be recursive)

function loopUntil(start, end) {
  if (start === end) {
    console.log(`made it to: ${end}`)
  } else if (start > end) {
    console.log("start should be less than end")
  } else {
    console.log(`going up: start: ${start}, end: ${end}`)
    loopUntil(start + 1, end)
  }
}

loopUntil(1, 10)

