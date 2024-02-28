/**
 * Unit tests for 1-calcul.calculateNumber
 */

const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', function () {
	describe('SUM', function () {
		it('should return the sum of integers', function () {
			expect(calculateNumber('SUM', 1, 3)).to.equal(4);
		});

		it('should round(up) one float', function () {
			expect(calculateNumber('SUM', 1.5, 3)).to.equal(5);
			expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
		});

		it('should round(down) one float', function () {
			expect(calculateNumber('SUM', 1.2, 3)).to.equal(4);
			expect(calculateNumber('SUM', 1, 3.2)).to.equal(4);
		});

		it('should round(up) two floats', function () {
			expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
		});

		it('should round(down) two floats', function () {
			expect(calculateNumber('SUM', 1.2, 3.2)).to.equal(4);
		});

		it('should round two floats', function () {
			expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
			expect(calculateNumber('SUM', 1.7, 3.2)).to.equal(5);
		});

		it('should return the sum of negative integers', function () {
			expect(calculateNumber('SUM', -1, -3)).to.equal(-4);
			expect(calculateNumber('SUM', 1, -3)).to.equal(-2);
			expect(calculateNumber('SUM', -1, 3)).to.equal(2);
		});

		it('should round(up, absolute value) negative one float', function () {
			expect(calculateNumber('SUM', -1.7, -3)).to.equal(-5);
			expect(calculateNumber('SUM', -1, -3.7)).to.equal(-5);
		});

		it('should round(down, absolute value) negative one float', function () {
			expect(calculateNumber('SUM', -1.2, -3)).to.equal(-4);
			expect(calculateNumber('SUM', -1, -3.2)).to.equal(-4);
		});

		it('should round(absolute value) two negative floats', function () {
			expect(calculateNumber('SUM', -1.2, -3.7)).to.equal(-5);
			expect(calculateNumber('SUM', -1.7, -3.2)).to.equal(-5);
		});

		it('should round towards +inf when value is exactly 0.5', function () {
			expect(calculateNumber('SUM', -1.5, 0)).to.equal(-1);
			expect(calculateNumber('SUM', 0, -3.5)).to.equal(-3);
		});

		it('should return the sum when Infinity is passed in', function () {
			expect(calculateNumber('SUM', Infinity, 1)).to.equal(Infinity);
			expect(calculateNumber('SUM', 1, Infinity)).to.equal(Infinity);
		});

		it('should return the sum when -Infinity is passed in', function () {
			expect(calculateNumber('SUM', -Infinity, 1)).to.equal(-Infinity);
			expect(calculateNumber('SUM', 1, -Infinity)).to.equal(-Infinity);
		});
	});

	describe('SUBTRACT', function () {
		it('should return the difference of integers', function () {
			expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
		});

		it('should round(up) one float', function () {
			expect(calculateNumber('SUBTRACT', 3, 1.5)).to.equal(1);
			expect(calculateNumber('SUBTRACT', 3.7, 1)).to.equal(3);
		});

		it('should round(down) one float', function () {
			expect(calculateNumber('SUBTRACT', 3, 1.2)).to.equal(2);
			expect(calculateNumber('SUBTRACT', 3.2, 1)).to.equal(2);
		});

		it('should round(up) two floats', function () {
			expect(calculateNumber('SUBTRACT', 3.7, 1.5)).to.equal(2);
		});

		it('should round(down) two floats', function () {
			expect(calculateNumber('SUBTRACT', 3.2, 1.2)).to.equal(2);
		});

		it('should round two floats', function () {
			expect(calculateNumber('SUBTRACT', 3.7, 1.2)).to.equal(3);
			expect(calculateNumber('SUBTRACT', 3.2, 1.7)).to.equal(1);
		});

		it('should return the difference of negative integers', function () {
			expect(calculateNumber('SUBTRACT', -1, -3)).to.equal(2);
			expect(calculateNumber('SUBTRACT', 1, -3)).to.equal(4);
			expect(calculateNumber('SUBTRACT', -1, 3)).to.equal(-4);
		});

		it('should round(up, absolute value) negative one float', function () {
			expect(calculateNumber('SUBTRACT', -1.7, -3)).to.equal(1);
			expect(calculateNumber('SUBTRACT', -1, -3.7)).to.equal(3);
		});

		it('should round(down, absolute value) negative one float', function () {
			expect(calculateNumber('SUBTRACT', -1.2, -3)).to.equal(2);
			expect(calculateNumber('SUBTRACT', -1, -3.2)).to.equal(2);
		});

		it('should round(absolute value) two negative floats', function () {
			expect(calculateNumber('SUBTRACT', -1.2, -3.7)).to.equal(3);
			expect(calculateNumber('SUBTRACT', -1.7, -3.2)).to.equal(1);
		});

		it('should round towards +inf when value is exactly 0.5', function () {
			expect(calculateNumber('SUBTRACT', -1.5, 0)).to.equal(-1);
			expect(calculateNumber('SUBTRACT', 0, -3.5)).to.equal(3);
		});

		it('should return the difference when Infinity is passed in', function () {
			expect(calculateNumber('SUBTRACT', Infinity, 1)).to.equal(Infinity);
			expect(calculateNumber('SUBTRACT', 1, Infinity)).to.equal(-Infinity);
		});

		it('should return the difference when -Infinity is passed in', function () {
			expect(calculateNumber('SUBTRACT', -Infinity, 1)).to.equal(-Infinity);
			expect(calculateNumber('SUBTRACT', 1, -Infinity)).to.equal(Infinity);
		});
	});

	describe('DIVIDE', function () {
		it('should return the quotient of integers', function () {
			expect(calculateNumber('DIVIDE', 10, 5)).to.equal(2);
			expect(calculateNumber('DIVIDE', 10, 8)).to.equal(1.25);
			expect(calculateNumber('DIVIDE', 1, 2)).to.equal(0.5);
		});

		it('should round(up) one float', function () {
			expect(calculateNumber('DIVIDE', 10, 4.5)).to.equal(2);
			expect(calculateNumber('DIVIDE', 9.6, 5)).to.equal(2);
		});

		it('should round(down) one float', function () {
			expect(calculateNumber('DIVIDE', 10, 5.2)).to.equal(2);
			expect(calculateNumber('DIVIDE', 10.2, 5)).to.equal(2);
		});

		it('should round(up) two floats', function () {
			expect(calculateNumber('DIVIDE', 9.7, 4.5)).to.equal(2);
		});

		it('should round(down) two floats', function () {
			expect(calculateNumber('DIVIDE', 10.2, 5.2)).to.equal(2);
		});

		it('should round two floats', function () {
			expect(calculateNumber('DIVIDE', 10.2, 4.7)).to.equal(2);
			expect(calculateNumber('DIVIDE', 9.5, 5.2)).to.equal(2);
		});

		it('should return the quotient of negative integers', function () {
			expect(calculateNumber('DIVIDE', -10, -5)).to.equal(2);
			expect(calculateNumber('DIVIDE', 10, -5)).to.equal(-2);
			expect(calculateNumber('DIVIDE', -10, 5)).to.equal(-2);
		});

		it('should round(up, absolute value) negative one float', function () {
			expect(calculateNumber('DIVIDE', -9.7, -5)).to.equal(2);
			expect(calculateNumber('DIVIDE', -10, -4.7)).to.equal(2);
		});

		it('should round(down, absolute value) negative one float', function () {
			expect(calculateNumber('DIVIDE', -10.2, -5)).to.equal(2);
			expect(calculateNumber('DIVIDE', -10, -5.2)).to.equal(2);
		});

		it('should round(absolute value) two negative floats', function () {
			expect(calculateNumber('DIVIDE', -10.2, -4.7)).to.equal(2);
			expect(calculateNumber('DIVIDE', -9.7, -5.2)).to.equal(2);
		});

		it('should round towards +inf when value is exactly 0.5', function () {
			expect(calculateNumber('DIVIDE', -10.5, 1)).to.equal(-10);
			expect(calculateNumber('DIVIDE', 10, -5.5)).to.equal(-2);
		});

		it('should return the difference when Infinity is passed in', function () {
			expect(calculateNumber('DIVIDE', Infinity, 1)).to.equal(Infinity);
		});

		it('should return the difference when -Infinity is passed in', function () {
			expect(calculateNumber('DIVIDE', -Infinity, 1)).to.equal(-Infinity);
		});

		it('should return error string when second number is 0', function () {
			expect(calculateNumber('divide', 10.5, 0)).to.equal('Error');
		});

		it('should return error string when second number rounds to 0', function () {
			expect(calculateNumber('divide', 10.5, 0.2)).to.equal('Error');
			expect(calculateNumber('divide', 10.5, -0.2)).to.equal('Error');
			expect(calculateNumber('divide', 10.5, -0.5)).to.equal('Error');
		});
	});
});
