const Utils = require('./utils');

/**
 * Simulates sending a payment request to an API
 * @param {number} totalAmount The total amount
 * @param {number} totalShipping The total shipping amount
 */
module.exports = function sendPaymentRequestToApi (totalAmount, totalShipping) {
    const sum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${sum}`);
};