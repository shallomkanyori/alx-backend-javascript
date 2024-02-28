/**
 * Unittests for 3-payment.sendPaymentRequestToApi
 */
const expect = require('chai').expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
    const spy = sinon.spy(Utils.calculateNumber);
    sendPaymentRequestToApi(100, 20);

    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    spy.restore();
});