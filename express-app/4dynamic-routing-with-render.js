const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/3.1index.html`);
})

app.get('/contact', (req, res) => {
  res.sendFile(`${__dirname}/3.2contact.html`);
})

app.get('/profile/:name', (req, res) => {
  //dummy data that you may get from database
  const data = {age: 29, job: 'bob'}
  res.render('profile-for-4',
    {
      person: req.params.name,
      data:data
    });
})

app.listen(4400, () => {
  console.log('go to port 4400.');
});
