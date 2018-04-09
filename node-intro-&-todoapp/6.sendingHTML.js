const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(`request was made from ${req.url}`);
  res.writeHead(200, {'Content-Type': 'text/html'});
  // res.end('salaaaams!');
  const readStream = fs.createReadStream(__dirname + '/6.1index.html', 'utf8');
  readStream.pipe(res);
});

server.listen(4500, '127.0.0.1')
console.log('now listening to port 4500');
