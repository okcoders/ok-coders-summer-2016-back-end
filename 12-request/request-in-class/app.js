var request = require('request')

// request('http://pitchfork.com', genericCallback)

function genericCallback(err, res, data) {
  console.log("headers", res.headers)
  console.log("status", res.statusCode)
  console.log("html", data.includes('David Bowie'))
  console.log("html", data.includes('Kendrick Lamar'))
}

var options = {
  url: 'http://pitchfork.com/reviews/best/albums/',
  method: 'GET',
  headers: {
    chicken: 'duck!',
    token: 'jfkdsa;jdklafsajfasklfdjsfdkslfds'
  },
  qs: {
    page: 1
  }
}
request(options, genericCallback)
