const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index-6');
})

app.get('/contact', (req, res) => {
  res.render('contact-6');
})

app.get('/profile/:name', (req, res) => {
  //dummy data that you may get from database
  const data = {age: 29, job: 'bob', hobbie: ['lol','gym','jdjdj','jfjfji']}
  res.render('profile-for-6',
    {
      person: req.params.name,
      data:data
    });
})

app.listen(4400, () => {
  console.log('go to port 4400.');
});
