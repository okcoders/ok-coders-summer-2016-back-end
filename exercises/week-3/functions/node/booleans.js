
/* declare and test all of the functions described in this file
 * run the file with $ node booleans.js
 */


/* 1. write a function called not that reverses the value of
 * its boolean parameter and returns it
 *
 * you might use the ! boolean operation
 * refer to the javascript intro variables and values
 *
 * print the result of calling the function not to the console, eg:
 * console.log( not(true) ) -> "false"
 * console.log( not(false) ) -> "true"
 */


/*
 * 2. create a function called andTable that checks all possible combinations
 * of performing the 'and' operation on two boolean parameters
 * and prints out the result of the operation

 * the template should help you get started
 */

function andTable(boolean1, boolean2) {
	if (boolean1 == true && boolean2 == true) {
		console.log("true && true : true")
	}
	// fill in the rest with additional else if statements
}

andTable(true, true)
andTable(true, false)
andTable(false, true)
andTable(false, false)

console.log() // just print a blank line

/*
 * 3. create a function called orTable that checks all possible combinations
 * of performing the 'or' operation on two boolean parameters
 * and prints out the result of the operation

 * the template should help you get started
 */

function orTable(boolean1, boolean2) {
	if (boolean1 == true && boolean2 == true) {
		console.log("true || true : true")
	}
	// fill in the rest with additional else if statements
	// be careful, still using an && for the test!
}

orTable(true, true)
orTable(true, false)
orTable(false, true)
orTable(false, false)

/* 4. define the following variables correctly so that
 * "Reached inside condition" is printed
 *
 * that is, you need to assign the right values to the variables
 * so that all the conditions are met for the
 * control flow to reach the console.log() call.
 *
 * consider what kind of value you need in each case, including
 * strings, numbers and booleans
 */

var x
var y
var z
var q


if (!x) {
  if (y && z < 100) {
    if (q == "OK Coders".toLowerCase()) {
      console.log("Reached inside condition")
    }
  }
}
