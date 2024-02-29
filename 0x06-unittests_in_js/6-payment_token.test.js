/**
 * Unittests for 6-payment_token.getPaymentTokenFromAPI
 */
const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
   it('return {data: "Successful response from the API"} if true is passed in', function (done) {
    getPaymentTokenFromAPI(true).then(function (obj) {
        expect(obj.data).to.equal('Successful response from the API');
        done();
    });
   });
});