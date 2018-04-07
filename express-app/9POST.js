const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });


app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.render('index-8');
});

app.get('/contact', (req, res) => {
  // console.log(req.query);
  res.render('contact-9', {queryString: req.query});
});

app.post('/contact', urlencodedParser, (req, res) => {
  console.log(req.body);
  res.render('contact-success-9', {data: req.body});
});
//you can use nodemailer to send this off
app.listen(4400, () => {
  console.log('go to port 4400.');
});
