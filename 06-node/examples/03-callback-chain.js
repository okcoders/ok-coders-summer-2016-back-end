var fs = require('fs')

var sampleData = 'hello there!'
var fileName = 'new-file.txt'

console.log("writing to file")
fs.writeFile(fileName, sampleData, writeFileCallback)

function writeFileCallback(err) {
  if (err) {
    throw err
  } else {
    console.log("we wrote our file!")
    getStats(fileName)
  }
}

function getStats(file) {
  fs.stat(file, getStatsCallback)
}

function getStatsCallback(err, stats) {
  if (err) {
    throw err
  } else {
    console.log("some stats on our file")
    console.log(stats)
    removeFile(fileName)
  }
}

function removeFile(file) {
  fs.unlink(file, removeFileCallback)
}

function removeFileCallback(err) {
  if (err) {
    throw err
  } else {
    console.log("we removed the file!")
  }
}


// ============= anonymously using rocket functions

fs.writeFile(fileName, sampleData, (err) => {
  if (err) {
    throw err
  } else {
    fs.stat(fileName, (err, stats) => {
      if (err) {
        throw err
      } else {
        console.log(stats)
        fs.unlink(fileName, (err) => console.log("removed file"))
      }
    })
  }
})

