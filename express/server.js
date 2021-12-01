'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

// Link to views folder.
let views = path.join(__dirname, '../dist');

// link to blog views

app.use(express.static('assets'));

// Home route.
router.get('/', (req, res) => {
  res.sendFile('index.html',{ root:views });
});


// blog home route.



app.use(bodyParser.json());
app.use('/.netlify/functions/server/', router);  // path must route to lambda (express/server.js)

module.exports = app;
module.exports.handler = serverless(app);router.get('/', (req, res) => {
  res.sendFile('index.html',{ root:views });
});