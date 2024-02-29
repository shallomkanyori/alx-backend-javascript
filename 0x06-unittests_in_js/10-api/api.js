/**
 * @module api
 */
const express = require('express');
const app = express();
const port = 7865;

app.use(express.json());
app.use(express.urlencoded());

app.get('/', function (req, res) {
    res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', function (req, res) {
    res.send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', function (req, res) {
    res.send({
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    });
});

app.post('/login', function (req, res) {
    const username = req.body.userName;
    if (username === undefined) {
        res.status(400).send('Missing required username body parameter');
    }
    res.send(`Welcome ${username}`);
});

app.listen(port, console.log(`API available on localhost port ${port}`));

module.exports = app;