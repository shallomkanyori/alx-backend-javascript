/**
 * Unittests for 3-payment.sendPaymentRequestToApi
 */
const expect = require('chai').expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
    let spy;

    beforeEach(function () {
        spy = sinon.spy(console, 'log');
    });

    afterEach(function () {
        spy.restore();
    });

    it('should log "The total is: 120" for args (100, 20)', function () {
        sendPaymentRequestToApi(100, 20);
        expect(spy.calledOnceWithExactly('The total is: 120')).to.be.true;
    });

    it('should log "The total is: 20" for args (10, 10)', function () {
        sendPaymentRequestToApi(10, 10);
        expect(spy.calledOnceWithExactly('The total is: 20')).to.be.true;
    });
});