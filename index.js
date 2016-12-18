const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const notesRouter = require('./routes/notesRouter.js');
const tokenVerifier = require("./auth/tokenVerifier");
const authRouter = require('./routes/authRouter');
const app = express();

// Environment variables
require('dotenv').config({silent: true});

// Express middleware
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// Mongo setup
let mongoConfig = process.env.DB_HOST;

mongoose.connect(mongoConfig);

// This is triggered when the connection to mongodb is successful
mongoose.connection.on('connected', function () {
  console.log(`Mongoose default connection open to ${mongoConfig}`);
});

let port = process.env.PORT || 5000;
app.use('/', authRouter);
app.use('/', tokenVerifier, notesRouter);

// Express application will listen to port in the env file
app.listen(port, function(err){
  if(err) throw err;
  console.log(`App listening on port: ${port}`);
});