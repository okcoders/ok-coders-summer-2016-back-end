// create two random numbers between 1 and 1000 (1000 exclusive)
// if the second number is greater than the first, print (i.e console.log):
// Hey! <second number> is greater than <first number>.
// if the first number is even, print:
// <first number> is an even number!
// if the second number is odd print:
// <second number> is an odd number!
// if the first number is greater than your age print:
// you are older than me and I should respect you.
// otherwise if the first number is the same as your age print:
// what are the odds!
// otherwise print:
// you still have so much to learn.
var max = 1000
var min = 1
var num1 = Math.floor(Math.random() * (max - min) + min)
var num2 = Math.floor(Math.random() * (max - min) + min)

if (num2 > num1) {
    console.log("Hey! " + num2 + " is greater than " + num1 + "!" )
}
if (num1 % 2 == 0) {
    console.log (num1 + " is even!")
    }
if (num2 % 2 != 0) {
    console.log(num2 + " is odd!")
}

if (num1 > 35) {
    console.log("you are older than me and I respect you")
} else if (num1 == 35) {
    console.log("what are the odds!")
} else {
    console.log("you still have much to learn!")
}


