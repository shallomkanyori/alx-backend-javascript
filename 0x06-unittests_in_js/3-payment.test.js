/**
 * Unittests for 3-payment.sendPaymentRequestToApi
 */
const expect = require('chai').expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

define('sendPaymentRequestToApi', function () {
    Utils.calculateNumber = sinon.spy();
    sendPaymentRequestToApi(100, 20);

    expect(Utils.calculateNumber.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    Utils.calculateNumber.restore();
});