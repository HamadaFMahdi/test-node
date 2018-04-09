//we could put this in the app.js file

const mongoose = require('mongoose');

//Map global promises
mongoose.Promise = global.Promise;
//mongoose connect
mongoose.connect('mongodb://******:******@ds239439.mlab.com:39439/pusherpoll')
.then(() => console.log('DB online ;)'))
.catch(err => console.log(err));
