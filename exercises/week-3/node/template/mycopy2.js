var fileName1 = process.argv[2]
var fileName2 = process.argv[3]
var fs = require('fs');

console.log("About to Read File");

fs.readFile(fileName1, function(err, data) {
    if (err) {
        console.log("Unable to read file " + fileName1);
    } else {
        fs.writeFile(fileName2, data )
    }
});

console.log("Called fs.readFile()\n");
