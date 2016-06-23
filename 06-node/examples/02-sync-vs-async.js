var fs = require('fs')

fs.readFile('notes.md', function(err, data) {
  console.log("data from async\n", data.toString())
})

console.log("before line 4 is called!")

// conversely we can force sync

var file = fs.readFileSync('notes.md').toString()
console.log("data from sync\n", file)

console.log("not before line 12 is called!")
