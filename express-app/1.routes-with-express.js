const express = require('express');

const app = express();


app.get('/', (req, res) => {
  res.send('homeeee');
})

app.get('/contact', (req, res) => {
  res.send('contact the mandem');
})

app.listen(4400, () => {
  console.log('go to port 4400.');
});
