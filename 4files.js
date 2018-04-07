const fs = require('fs');

// const details = fs.readFileSync('4.1login.txt', 'utf8');
// fs.writeFileSync('4.1login.txt', 'Homie gg123')
// console.log(details);

const details = fs.readFile('4.1login.txt', 'utf8', (err, data) => console.log(`hi ${data}`));

fs.writeFile();
fs.unlink(); //delete file
fs.mkdirSync();
fs.rmdirSync();
fs.mkdir();
fs.rmdir();
