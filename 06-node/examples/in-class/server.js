var http = require('http')

var server = http.createServer(requestReceived)

function requestReceived(req, res) {
  console.log(req.url)
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end("hello!!!!")
}

server.listen('3000')
console.log("I'm waiting")
