var request = require('request')
var _ = require('lodash')

request('http://pitchfork.com', genericCallback)

request
  .get('http://pitchfork.com')
    .on('response', genericResponse)
    .on('error', genericError)

request
  .post('http://pitchfork.com')
    .on('response', genericResponse)
    .on('error', genericError)


function genericResponse(response) {
  console.log('response:', response.statusCode, response.headers)
}

function genericError(err) {
  console.log('oops!', err)
}

function genericCallback(err, response, body) {
  if (err) {
    console.log('oops!')
  } else {
    console.log('response:', response.statusCode, response.headers)
    console.log('body:', body.substring(20000, 21000))
  }
}

var options = {
  url: 'http://pitchfork.com/reviews/best/albums',
  method: 'GET',
  headers: {
    chicken: 'duck',
    accept: 'text/html'
  }
}

request(options, genericCallback)

var options = {
  url: 'http://pitchfork.com/reviews/best/albums',
  method: 'GET',
  qs: {
    page: 1
  }
}

request(options, genericCallback)

var options = {
  url: 'http://pitchfork.com/reviews/best/albums',
  method: 'GET',
  qs: {
    page: 4
  }
}

request(options, genericCallback)
