/**
 * Unit tests for 0-calcul.calculateNumber
 */

const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
	it('should return the sum of integers', function () {
		assert.strictEqual(calculateNumber(1, 3), 4);
	});

	it('should round(up) one float', function () {
		assert.strictEqual(calculateNumber(1.5, 3), 5);
		assert.strictEqual(calculateNumber(1, 3.7), 5);
	});

	it('should round(down) one float', function () {
		assert.strictEqual(calculateNumber(1.2, 3), 4);
		assert.strictEqual(calculateNumber(1, 3.2), 4);
	});

	it('should round(up) two floats', function () {
		assert.strictEqual(calculateNumber(1.5, 3.7), 6);
	});

	it('should round(down) two floats', function () {
		assert.strictEqual(calculateNumber(1.2, 3.2), 4);
	});

	it('should round two floats', function () {
		assert.strictEqual(calculateNumber(1.2, 3.7), 5);
		assert.strictEqual(calculateNumber(1.7, 3.2), 5);
	});

	it('should return the sum of negative integers', function () {
		assert.strictEqual(calculateNumber(-1, -3), -4);
		assert.strictEqual(calculateNumber(1, -3), -2);
		assert.strictEqual(calculateNumber(-1, 3), 2);
	});

	it('should round(up, absolute value) negative one float', function () {
		assert.strictEqual(calculateNumber(-1.7, -3), -5);
		assert.strictEqual(calculateNumber(-1, -3.7), -5);
	});

	it('should round(down, absolute value) negative one float', function () {
		assert.strictEqual(calculateNumber(-1.2, -3), -4);
		assert.strictEqual(calculateNumber(-1, -3.2), -4);
	});

	it('should round(absolute value) two negative floats', function () {
		assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
		assert.strictEqual(calculateNumber(-1.7, -3.2), -5);
	});

	it('should round towards +inf when value is exactly 0.5', function () {
		assert.strictEqual(calculateNumber(-1.5, 0), -1);
		assert.strictEqual(calculateNumber(0, -3.5), -3);
	});

	it('should return the sum when Infinity is passed in', function () {
		assert.strictEqual(calculateNumber(Infinity, 1), Infinity);
		assert.strictEqual(calculateNumber(1, Infinity), Infinity);
	});

	it('should return the sum when -Infinity is passed in', function () {
		assert.strictEqual(calculateNumber(-Infinity, 1), -Infinity);
		assert.strictEqual(calculateNumber(1, -Infinity), -Infinity);
	});
});
