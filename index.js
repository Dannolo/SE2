// =======================
// Dichiarazione pacchetti
// =======================
const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser');
const morgan      = require('morgan');
const mongoose    = require('mongoose');
const cors = require('cors');
// =======================
// configurazione parametri
// =======================
var config = require('./config.js'); // file di configurazione
var signup = require('./routes/signup.js');
var login = require('./routes/login.js');
var reserved = require('./routes/reserved.js');
var images = require('./routes/images.js');
var getads = require('./routes/getads.js');

var port = process.env.PORT || 8080;

mongoose.connect(config.database, {
   useMongoClient: true
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
// =======================
// routes
// =======================
app.use('/signup', signup);
app.use('/login', login);
app.use('/reserved', reserved);
app.use('/images',images);
app.use('/getads',getads);
// =======================
// avvio del server
// =======================
app.listen(port);
console.log('Server avviato sulla porta:' + port);
