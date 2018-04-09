const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.render('index-8');
})

app.get('/contact', (req, res) => {
  // console.log(req.query);
  res.render('contact-8', {queryString: req.query});
})

app.listen(4400, () => {
  console.log('go to port 4400.');
});
