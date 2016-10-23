const http = require('http')
const fs = require('fs')

/*pipes (used to take the data from readMe to writeMe)
let myReadStream = fs.createReadStream(`${__dirname}/readMe.txt`,'utf8')
let myWriteStream = fs.createWriteStream(`${__dirname}/writeMe.txt`)
myReadStream.pipe(myWriteStream)
*/
let server = http.createServer((req,res)=>{
  console.log(`request was made: ${req.url}`)
  res.writeHead(200, {'Content-Type' : 'text/plain'})
  let myReadStream = fs.createReadStream(`${__dirname}/readMe.txt`,'utf8')
  myReadStream.pipe(res)
})//this basically serves the text file to the client
server.listen(3000, '127.0.0.1');
console.log("listening to port 3000")
/*

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
*/
