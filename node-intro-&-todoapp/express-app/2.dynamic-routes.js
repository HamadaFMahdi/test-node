const express = require('express');

const app = express();


app.get('/', (req, res) => {
  res.send('homeeee');
})

app.get('/contact', (req, res) => {
  res.send('contact the mandem');
})

app.get('/profile/:id', (req, res) => {
  res.send(`you requested profile: ${req.params.id}`);
})

app.get('/name/:name', (req, res) => {
  res.send(`you requested name: ${req.params.name}`);
})

app.listen(4400, () => {
  console.log('go to port 4400.');
});
