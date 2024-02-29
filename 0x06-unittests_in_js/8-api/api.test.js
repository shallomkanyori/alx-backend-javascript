/**
 * Intergration test for ./api
 */
const request = require('request');
const expect = require('chai').expect;

const url = 'http:localhost:7865/';

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

    it('should return unsupported method error for http method POST', function (done) {
        request.post(url, function (err, res) {
            expect(res.statusCode).to.be.equal(405);
            done();
        });
    });

    it('should return unsupported method error for http method PUT', function (done) {
        request.put(url, function (err, res) {
            expect(res.statusCode).to.be.equal(405);
            done();
        });
    });

    it('should return unsupported method error for http method PATCH', function (done) {
        request.patch(url, function (err, res) {
            expect(res.statusCode).to.be.equal(405);
            done();
        });
    });

    it('should return unsupported method error for http method DELETE', function (done) {
        request.delete(url, function (err, res) {
            expect(res.statusCode).to.be.equal(405);
            done();
        });
    });
});