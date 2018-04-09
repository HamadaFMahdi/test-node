const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');


// DB config
require('./config/db');

const app = express();

const poll = require('./routes/poll');

// set public folder
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// enable CORS
app.use(cors());

//what we are saying here is that, any request in the url that is /poll
//then use the pull.js router to route it.
app.use('/poll', poll);

const port = 3000;

//start server
app.listen(port, () => console.log(`listening on port: ${port}`));
