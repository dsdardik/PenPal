'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

var port = process.env.PORT || 1337;
app.set('port', (port));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.get('/webhook', function (req, res) {
    if (req.query['hub.mode'] === 'subscribe' &&
        req.query['hub.verify_token'] === "penPalServer_Token") {
            console.log("Validating webhook");
            res.status(200).send(req.query['hub.challenge']);
  } else {
                console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);          
  }  
});

app.listen(app.get('port'), function () {
    console.log("Status: Running");
});