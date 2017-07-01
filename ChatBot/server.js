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

app.listen(app.get('port'), function () {
    console.log("Status: Running");
});