/**
 * Intergration test for ./api
 */
const request = require('request');
const expect = require('chai').expect;

const url = 'http://localhost:7865/';

describe('Index page', function () {
    it('should return the status code 200', function (done) {
        request.get(url, function (err, res) {
            expect(res.statusCode).to.be.equal(200);
            done();
        });
    });

    it('should return the status code 404 for any path other than /', function (done) {
        request.get(`${url}some_path/`, function (err, res) {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('should return the string "Welcome to the payment system"', function (done) {
        request.get(url, function (err, res, body) {
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });

    it('should return 404 for http method POST', function (done) {
        request.post(url, function (err, res) {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('should return 404 for http method PUT', function (done) {
        request.put(url, function (err, res) {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('should return 404 for http method PATCH', function (done) {
        request.patch(url, function (err, res) {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('should return 404 for http method DELETE', function (done) {
        request.delete(url, function (err, res) {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });
});

describe('Cart page', function () {
    const cartUrl = `${url}cart/`;

    it('should return 404 error for no parameters', function (done) {
        request.get(cartUrl, function (err, res) {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('should return the status code 200 for a number parameter', function (done) {
        request.get(`${cartUrl}20`, function (err, res) {
            expect(res.statusCode).to.be.equal(200);
            done();
        });
    });

    it('should return the string "Payment methods for cart 2" for id parameter 2', function (done) {
        request.get(`${cartUrl}2`, function (err, res, body) {
            expect(body).to.be.equal('Payment methods for cart 2');
            done();
        });
    });

    it('should return 404 error for id parameter that is not a number', function (done) {
        request.get(`${cartUrl}hello`, function (err, res, body) {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('should return 404 for http method POST', function (done) {
        request.post(`${cartUrl}2`, function (err, res) {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('should return 404 for http method PUT', function (done) {
        request.put(`${cartUrl}2`, function (err, res) {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('should return 404 for http method PATCH', function (done) {
        request.patch(`${cartUrl}2`, function (err, res) {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('should return 404 for http method DELETE', function (done) {
        request.delete(`${cartUrl}2`, function (err, res) {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });
});