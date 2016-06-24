function higherOrder(name, callback) {
    return callback(name)
}

function lowerAndSub(str) {
    return str.toLowerCase().substring(0,2)
}


var loweredName = higherOrder('Justin', lowerAndSub)
console.log(loweredName)

function higherAndSub(str) {
    return str.toUpperCase().substring(0,2)
}

var highername = higherOrder('Justin', higherAndSub)
console.log(highername)
