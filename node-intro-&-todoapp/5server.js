const http = require('http');
const fs = require('fs');

// const readStream = fs.createReadStream(__dirname + '/5.1readme.txt', 'utf8');
// const writeStream = fs.createWriteStream(__dirname + '/5.2writeme.txt');


// readStream.on('data', (chunk) => {
//   console.log('new chunk recieved');
//   writeStream.write(chunk);
// })

//using pipes:
// readStream.pipe(writeStream);





const server = http.createServer((req, res) => {
  console.log(`request was made from ${req.url}`);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // res.end('salaaaams!');
  const readStream = fs.createReadStream(__dirname + '/5.1readme.txt', 'utf8');
  readStream.pipe(res);
});

server.listen(4500, '127.0.0.1')
console.log('now listening to port 4500');
