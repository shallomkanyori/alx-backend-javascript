/**
 * @module api
 */
const express = require('express');
const app = express();
const port = 7865;

app.get('/', function (req, res) {
    res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d)+', function (req, res) {
    res.send(`Payment methods for cart ${id}`);
});

app.listen(port, console.log(`API available on localhost port ${port}`));

module.exports = app;