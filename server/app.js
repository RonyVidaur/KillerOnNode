var http = require('http')
var server = http.createServer((req, res)=>{
  console.log(`request was made: ${req.url}`)
  res.writeHead(200, {'Content-Type': "text/plain"})
  res.end('See how cool this is')
})

server.listen(3000, '127.0.0.1')
console.log('folks, now im listening to port 3000')
