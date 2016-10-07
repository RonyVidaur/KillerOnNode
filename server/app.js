const http = require('http')
const fs = require('fs')

let server = http.createServer((req, res)=>{
  console.log(`request was made: ${req.url}`)
  res.writeHead(200, {'Content-Type': "application/json"})
  let mObject = {
    name: 'Rony',
    job: 'Ninja',
    age: 23
  };
  //let myReadStream = fs.createReadStream(__dirname + '/index.html','utf8')
  //myReadStream.on('data',(chunk)=>{mWriteStream.write(chunk)})
  //myReadStream.pipe(res);
  res.end(JSON.stringify(mObject));
})

server.listen(3000, '127.0.0.1')
console.log('folks, now im listening to port 3000')
