const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(`request was made from ${req.url}`);
  res.writeHead(200, {'Content-Type': 'application/json'});
  const myObj = {
    name: 'hi',
    job: 'lol',
    age: 444
  };
  res.end(JSON.stringify(myObj));

});

server.listen(4500, '127.0.0.1')
console.log('now listening to port 4500');
