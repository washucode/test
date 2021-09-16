'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

// Link to views folder.
let views = path.join(__dirname, '../');
app.use(express.static( 'assets'));

// Home route.
router.get('/', (req, res) => {
  res.sendFile('index.html',{ root:views });
});




app.use(bodyParser.json());
app.use('/', router);  // path must route to lambda (express/server.js)

module.exports = app;
module.exports.handler = serverless(app);