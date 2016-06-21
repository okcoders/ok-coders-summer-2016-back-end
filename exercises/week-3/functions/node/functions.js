
/* declare and test all of the functions described in this file
 * run the file with $ node functions.js
 */




/* 1. declare a function called hugeNumber that takes no parameters
 * return the number 2 to the 64th power
 *
 * you should use the following built-in function:
 * Math.pow()

 * print out the result of calling the function, for example:
 * console.log( hugeNumber() ) -> 18446744073709552000
 */




/* 2. declare a function called testIt that takes one parameter,
 * the number 'x'
 *
 * if x is less than 0, print out "<x> is negative"
 * if x is equal to 0, print out "<x> is zero"
 * if x is greater than 0, print out "<x> is positive"
 * in each case, replace <x> with the actual number
 *
 * use console.log() to print out the text from within the function
 *
 * for example:
 * testIt(-100) -> "-100 is negative"
 * testIt(0) -> "0 is zero"
 * testIt(100) -> "100 is postive"
 */




/* 3. declare a function called addSuffix that takes two parameters,
 * the string 'name' and the boolean 'male'
 *
 * if 'male' is true, return a string with 'Mr. ' prepended to it.
 * if 'male' is false, return a string with 'Mrs. ' prepended to it.

 * you only need string concatenation and an if statement

 * print out the result of calling the function, for example:
 * console.log( addSuffix("Zach Mays", true) ) -> "Mr. Zach Mays"
 */




/* 4. consider the following two functions foo and bar
 * try to understand what they are doing
 *
 * uncomment the calls to foo below them one at a time
 * (delete the // at the front of the line, which is a single line comment)
 *
 * what happens? why? follow the control flow of the program
 * and calculate the value that each function gets as you go

 * why does the program crash on the last example?
 */

function foo(x) {
  console.log("foo has", x)
  if (x==0) {
    return x
  } else {
    return bar(x-2)
  }
}

function bar(x) {
  console.log("bar has", x)
  if (x==1) {
    return x
  } else {
    return foo(x-2)
  }
}

/* uncomment the next three lines one at a time and run the program */

// foo(12)
// foo(15)
// bar(12)
