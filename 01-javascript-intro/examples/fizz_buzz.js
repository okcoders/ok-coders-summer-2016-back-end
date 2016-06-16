// loop through 1 to 100 (100 inclusive)
// if the number is divisible by 3, print fizz
// if the number is divisible by 5, print buzz
// if the number is divisible by 5 and 3 print fizz buzz

// note, you should only print once per number
//
for (var i = 1; i <= 100; i++) {
  console.log(i)
  if (i % 3 === 0) {
    console.log("fizz: " + i)
  } else if (i % 5 === 0) {
    console.log("buzz: " + i)
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizz buzz: " + i)
  }
}
