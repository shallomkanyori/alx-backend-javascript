/**
 * Intergration test for ./api
 */
const request = require('request');
const expect = require('chai').expect;

const url = 'http://localhost:7865/';

describe('Index page', function () {
    it('should return the status code 200', function (done) {
        request.get(url, function (_err, res) {
            expect(res.statusCode).to.be.equal(200);
            done();
        });
    });

    it('should return the status code 404 for any path other than /', function (done) {
        request.get(`${url}some_path/`, function (_err, res) {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('should return the string "Welcome to the payment system"', function (done) {
        request.get(url, function (_err, _res, body) {
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });

    it('should return 404 for http method POST', function (done) {
        request.post(url, function (_err, res) {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('should return 404 for http method PUT', function (done) {
        request.put(url, function (_err, res) {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('should return 404 for http method PATCH', function (done) {
        request.patch(url, function (_err, res) {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('should return 404 for http method DELETE', function (done) {
        request.delete(url, function (_err, res) {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });
});

describe('Cart page', function () {
    const cartUrl = `${url}cart/`;

    it('should return 404 error for no parameters', function (done) {
        request.get(cartUrl, function (_err, res) {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('should return the status code 200 for a number parameter', function (done) {
        request.get(`${cartUrl}20`, function (_err, res) {
            expect(res.statusCode).to.be.equal(200);
            done();
        });
    });

    it('should return the string "Payment methods for cart 2" for id parameter 2', function (done) {
        request.get(`${cartUrl}2`, function (_err, _res, body) {
            expect(body).to.be.equal('Payment methods for cart 2');
            done();
        });
    });

    it('should return the status code 404 for a negative id parameter', function (done) {
        request.get(`${cartUrl}-5`, function (_err, res) {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('should return 404 error for id parameter that is not a number', function (done) {
        request.get(`${cartUrl}hello`, function (_err, res, _body) {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('should return 404 for http method POST', function (done) {
        request.post(`${cartUrl}2`, function (_err, res) {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('should return 404 for http method PUT', function (done) {
        request.put(`${cartUrl}2`, function (_err, res) {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('should return 404 for http method PATCH', function (done) {
        request.patch(`${cartUrl}2`, function (_err, res) {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('should return 404 for http method DELETE', function (done) {
        request.delete(`${cartUrl}2`, function (_err, res) {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });
});

describe('Available payments endpoint', function () {
    const apUrl = `${url}available_payments`;
    it('GET /available_payments should return payment info object', function (done) {
        request.get(apUrl, function (_err, res, body) {
            const expObj = {
                payment_methods: {
                    credit_cards: true,
                    paypal: false
                  }
            };

            const resObj = JSON.parse(body);

            expect(res.statusCode).to.be.equal(200);
            expect(resObj).to.deep.equal(expObj);

            done();
        });
    });

    it('GET /available_payments/anything should return 404 status', function (done) {
        request.get(`${apUrl}/anything`, function (_err, res) {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });
});

describe('Login endpoint', function () {
    const loginUrl = `${url}login`;

    it('POST /login with body variable username should return welcome message', function (done) {
        request.post(loginUrl, {form: {userName: 'John'}}, function (_err, res, body) {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome John');

            done();
        });
    });

    it('POST /login without body variable username should return 400', function (done) {
        request.post(loginUrl, {form: {name: 'John'}}, function (_err, res) {
            expect(res.statusCode).to.be.equal(400);
            done();
        });
    });

    it('POST /login without body should return 400', function (done) {
        request.post(loginUrl, function (_err, res) {
            expect(res.statusCode).to.be.equal(400);
            done();
        });
    });

    it('GET /login should return 404 status', function (done) {
        request.get(loginUrl, function (_err, res) {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });
});