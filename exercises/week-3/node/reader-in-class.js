var chicken = require('fs')

var fileName = process.argv[2]

chicken.readFile(fileName, readFileCallback)

function readFileCallback(err, data) {
  console.log(data.toString())
}

