/**
 * @module api
 */
const express = require('express');
const app = expres();
const port = 7865;

app.get('/', function (req, res) {
    res.send('Welcome to the payment system');
});

app.listen(port, console.log(`API available on localhost port ${port}`));

module.exports = app;