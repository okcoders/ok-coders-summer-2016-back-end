var fs = require('fs')

fs.readFile('../notes.md', readFileCallback)

function readFileCallback(err, data) {
    if (err) {
        throw err
    } else {
        console.log(data.toString())
    }
}


var dataForFile = 'hello world!'
var ourFile = 'tempo.md'

fs.writeFile(ourFile, dataForFile, writeFileCallback)

function writeFileCallback (err) {
    if (err) {throw err}
    else {console.log("wrote to file!")}
    fs.stat(ourFile, statCallBack)
}




function statCallBack (err, stats) {
    if (err) { console.log(err)}
    console.log("some stats")
    console.log(stats)
    fs.unlink(ourFile, deleteCallBack)

}

function deleteCallBack( err) {
    console.log("delete success!")
}
