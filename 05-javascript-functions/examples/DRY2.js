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

var newVar1 = var1.toLowerCase()
var newVar2 = var2.toLowerCase()
var newVar3 = var3.toLowerCase()

var finalVar1 = newVar1.substring(0, 3)
var finalVar2 = newVar2.substring(0, 3)
var finalVar3 = newVar3.substring(0, 3)

console.log(finalVar1)
console.log(finalVar2)
console.log(finalVar3)
