/**
 * Unittests for 3-payment.sendPaymentRequestToApi
 */
const expect = require('chai').expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
    it('should call Utils.calculateNumber', function () {
        const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
        const spy = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);
        
        expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(spy.calledOnceWithExactly('The total is: 10'));
        
        stub.restore();
        spy.restore();
    });
});