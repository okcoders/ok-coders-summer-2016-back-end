var fileName = process.argv[2]
var fs = require('fs');

// ...
// and much more



console.log("About to Read File");

fs.readFile(fileName, function(err, data) {
    if (err) {
        console.log("Unable to read file test.txt");
    } else {
        console.log("File Contents:");
        console.log(data.toString());
    }
});

console.log("Called fs.readFile()\n");
