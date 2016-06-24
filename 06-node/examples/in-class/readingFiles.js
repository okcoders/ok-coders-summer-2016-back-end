var fs = require('fs')

// fs.readFile('../notes.md', readFileCallback)

function readFileCallback(err, chicken) {
  if(err) {
    throw err
  } else {
    console.log(chicken.toString())
  }
}

var dataForFile = 'hello world!'
var ourFile = 'tempo.md'
fs.writeFile(ourFile, dataForFile, writeFileCallback)

function writeFileCallback(err) {
  if(err) { throw err }
  console.log("wrote to file!")
  fs.stat(ourFile, statCallback)
}

function statCallback(err, stats) {
  if (err) { console.log(err) }
  console.log("some stats")
  console.log(stats)
  fs.unlink(ourFile, deleteCallback)
}

function deleteCallback(err) {
  if (err) {
  } else {
    console.log("delete success!")
  }
}
