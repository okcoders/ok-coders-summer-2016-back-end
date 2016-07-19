var request = require('request');

//request('http://pitchfork.com', genericCallback)

function genericCallback(err, res, data) {
    console.log("headers", res.headers)
    console.log("status",res.statusCode)
    console.log("html",data.substring(0,100))
}

var options = {
    url: 'http://pitchfork.com/reviews/best/albums',
    method: 'GET',
    headers: {
        chicken: 'duck!',
        token: 'dsfadfhajkdh'
},
    qs: {
        page: 2
    }
}

request(options, genericCallback);
