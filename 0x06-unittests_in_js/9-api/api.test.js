/**
 * Intergration test for ./api
 */
const request = require('request');
const expect = require('chai').expect;

const url = 'http://localhost:7865/';
const cartUrl = `${url}cart`;

describe('API integration test', function () {
    it('GET / should return the status code 200', function (done) {
        request.get(url, function (err, res) {
            expect(res.statusCode).to.be.equal(200);
            done();
        });
    });

    it('GET / should return the string "Welcome to the payment system"', function (done) {
        request.get(url, function (err, res, body) {
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });

    it('GET /cart should return 404 error', function (done) {
        request.get(cartUrl, function (err, res) {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('GET /cart/:id should return the status code 200 for valid parameter', function (done) {
        request.get(`${cartUrl}/2`, function (err, res) {
            expect(res.statusCode).to.be.equal(200);
            done();
        });
    });

    it('GET /cart/:id should return the string "Payment methods for cart 2" for :id = 2', function (done) {
        request.get(`${cartUrl}/2`, function (err, res, body) {
            expect(body).to.be.equal('Payment methods for cart 2');
            done();
        });
    });

    it('GET /cart/:id should return the status code 404 for a negative :id', function (done) {
        request.get(`${cartUrl}/-5`, function (err, res) {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('GET /cart/:id should return 404 error for :id that is not a number', function (done) {
        request.get(`${cartUrl}/hello`, function (err, res, body) {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });
});