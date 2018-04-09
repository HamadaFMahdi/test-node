const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(`request was made from ${req.url}`);
  if(req.url === '/home' || req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/6.1index.html').pipe(res);
  } else if(req.url === '/contact'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/8.1contact.html').pipe(res);
  } else if(req.url === '/api/lol'){
    const bobs = [{name: 'bob1', age:24}, {name:'bob2', age:45}];
    res.writeHead(200, {'Content-Type': 'application/JSON'});
    res.end(JSON.stringify(bobs));
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/8.404.html').pipe(res);
  }

});

server.listen(4500, '127.0.0.1')
console.log('now listening to port 4500');
