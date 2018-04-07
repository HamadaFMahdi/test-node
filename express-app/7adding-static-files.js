const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

// just a quick explanation here:
// So for those who are confused, the first argument passed
// in the use function is basically saying that anyone who tries
// to access files inside /assets should be served with the files
// inside the "stuff" dir, which is the second parameter of the use
// function.
// if you look at the link tag inside your html, it says
// "href="/assets/style.css"", here in this case you are trying
// to access the /assets folder, so then you are served with
// the files inside the stuff dir(which is indicated on the second
// param of the use function).﻿ credits to Rubin Luitel

app.get('/', (req, res) => {
  res.render('index-7');
})


app.listen(4400, () => {
  console.log('go to port 4400.');
});
