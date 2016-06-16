var max = 1000
var min = 1
var firstNumber = Math.floor(Math.random() * (max - min) + min)
var secondNumber = Math.floor(Math.random() * (max - min) + min)
console.log(`the first number is ${firstNumber}`)
console.log(`the second number is ${secondNumber}`)

var age = 500
// create two random numbers between 1 and 1000 (1000 exclusive)
// if the second number is greater than the first, print (i.e console.log):
// Hey! <second number> is greater than <first number>.
if (secondNumber > firstNumber) {
  console.log(`${secondNumber} is greater than ${firstNumber}`)
}
// if the first number is even, print:
if (firstNumber % 2 === 0) {
  console.log(`${firstNumber} even`)
}
// <first number> is an even number!
// if the second number is odd print:
// <second number> is an odd number!
if (secondNumber % 2 !== 0) {
  console.log(`${secondNumber} is odd`)
}
// if the first number is greater than your age print:
// you are older than me and I should respect you.
// otherwise if the first number is the same as your age print:
// what are the odds!
// otherwise print:
// you still have so much to learn.
if (firstNumber > age) {
  console.log("you are older than me and I should respect you.")
} else if (firstNumber === age) {
  console.log("What are the odds")
} else {
  console.log("you still have so much to learn.")
}
