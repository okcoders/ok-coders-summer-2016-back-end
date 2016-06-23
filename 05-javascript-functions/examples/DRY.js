// write a program that takes three parameters
// 1. lower case each of the parameters
// 2. take the first three characters of each string
// 3. log each of those
//
// i.e when you execute it you should see
// node DRY.js EXERCISES ARE AWESOME
// exe
// are
// awe
//
// remember this? process.argv
var var1 = process.argv[2]
var var2 = process.argv[3]
var var3 = process.argv[4]

function lowerAndSub(string, end) {
  var lower = string.toLowerCase()
  return lower.substring(0, end)
}

console.log(lowerAndSub(var1, 4))
console.log(lowerAndSub(var2, 3))
console.log(lowerAndSub(var3, 3))

function newScopeFunction() {

}
