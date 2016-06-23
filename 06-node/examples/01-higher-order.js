function modifyAndPrint(name, modify) {
  console.log(modify(name))
}

function lowerAndSub(str) {
  return str.toLowerCase().substring(0, 2)
}

function upperAndSub(str) {
  return str.toUpperCase().substring(0, 2)
}

modifyAndPrint('zach', lowerAndSub)
modifyAndPrint('zach', upperAndSub)

// we can do this without naming our functions

modifyAndPrint('zach', function(str) {
  return str.toUpperCase().substring(0, 2)
})

// even more terse
modifyAndPrint('zach', str => str.toUpperCase().substring(0, 2))
