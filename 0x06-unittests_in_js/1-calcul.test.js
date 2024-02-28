/**
 * Unit tests for 1-calcul.calculateNumber
 */

const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
	describe('SUM', function() {
		it('should return the sum of integers', function() {
			assert.equal(calculateNumber('SUM', 1, 3), 4);
		});

		it('should round(up) one float', function () {
			assert.equal(calculateNumber('SUM', 1.5, 3), 5);
			assert.equal(calculateNumber('SUM', 1, 3.7), 5);
		});

		it('should round(down) one float', function () {
			assert.equal(calculateNumber('SUM', 1.2, 3), 4);
			assert.equal(calculateNumber('SUM', 1, 3.2), 4);
		});

		it('should round(up) two floats', function() {
			assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
		});

		it('should round(down) two floats', function() {
			assert.equal(calculateNumber('SUM', 1.2, 3.2), 4);
		});

		it('should round two floats', function() {
			assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
			assert.equal(calculateNumber('SUM', 1.7, 3.2), 5);
		});

		it('should return the sum of negative integers', function() {
			assert.equal(calculateNumber('SUM', -1, -3), -4);
			assert.equal(calculateNumber('SUM', 1, -3), -2);
			assert.equal(calculateNumber('SUM', -1, 3), 2);
		});

		it('should round(up, absolute value) negative one float', function() {
			assert.equal(calculateNumber('SUM', -1.7, -3), -5);
			assert.equal(calculateNumber('SUM', -1, -3.7), -5);
		});

		it('should round(down, absolute value) negative one float', function() {
			assert.equal(calculateNumber('SUM', -1.2, -3), -4);
			assert.equal(calculateNumber('SUM', -1, -3.2), -4);
		});

		it('should round(absolute value) two negative floats', function () {
			assert.equal(calculateNumber('SUM', -1.2, -3.7), -5);
			assert.equal(calculateNumber('SUM', -1.7, -3.2), -5);
		});

		it('should round towards +inf when value is exactly 0.5', function () {
			assert.equal(calculateNumber('SUM', -1.5, 0), -1);
			assert.equal(calculateNumber('SUM', 0, -3.5), -3);
		});

		it('should return the sum when Infinity is passed in', function() {
			assert.equal(calculateNumber('SUM', Infinity, 1), Infinity);
			assert.equal(calculateNumber('SUM', 1, Infinity), Infinity);
		});

		it('should return the sum when -Infinity is passed in', function() {
			assert.equal(calculateNumber('SUM', -Infinity, 1), -Infinity);
			assert.equal(calculateNumber('SUM', 1, -Infinity), -Infinity);
		});
	});

	describe('SUBTRACT', function() {
		it('should return the difference of integers', function() {
			assert.equal(calculateNumber('SUBTRACT', 3, 1), 2);
		});

		it('should round(up) one float', function () {
			assert.equal(calculateNumber('SUBTRACT', 3, 1.5), 1);
			assert.equal(calculateNumber('SUBTRACT', 3.7, 1), 3);
		});

		it('should round(down) one float', function () {
			assert.equal(calculateNumber('SUBTRACT', 3, 1.2), 2);
			assert.equal(calculateNumber('SUBTRACT', 3.2, 1), 2);
		});

		it('should round(up) two floats', function() {
			assert.equal(calculateNumber('SUBTRACT', 3.7, 1.5), 2);
		});

		it('should round(down) two floats', function() {
			assert.equal(calculateNumber('SUBTRACT', 3.2, 1.2), 2);
		});

		it('should round two floats', function() {
			assert.equal(calculateNumber('SUBTRACT', 3.7, 1.2), 3);
			assert.equal(calculateNumber('SUBTRACT', 3.2, 1.7), 1);
		});

		it('should return the difference of negative integers', function() {
			assert.equal(calculateNumber('SUBTRACT', -1, -3), -7);
			assert.equal(calculateNumber('SUBTRACT', 1, -3), 4);
			assert.equal(calculateNumber('SUBTRACT', -1, 3), -4);
		});

		it('should round(up, absolute value) negative one float', function() {
			assert.equal(calculateNumber('SUBTRACT', -1.7, -3), 1);
			assert.equal(calculateNumber('SUBTRACT', -1, -3.7), 3);
		});

		it('should round(down, absolute value) negative one float', function() {
			assert.equal(calculateNumber('SUBTRACT', -1.2, -3), 2);
			assert.equal(calculateNumber('SUBTRACT', -1, -3.2), 2);
		});

		it('should round(absolute value) two negative floats', function () {
			assert.equal(calculateNumber('SUBTRACT', -1.2, -3.7), 3);
			assert.equal(calculateNumber('SUBTRACT', -1.7, -3.2), 1);
		});

		it('should round towards +inf when value is exactly 0.5', function () {
			assert.equal(calculateNumber('SUBTRACT', -1.5, 0), -1);
			assert.equal(calculateNumber('SUBTRACT', 0, -3.5), 3);
		});

		it('should return the difference when Infinity is passed in', function() {
			assert.equal(calculateNumber('SUBTRACT', Infinity, 1), Infinity);
			assert.equal(calculateNumber('SUBTRACT', 1, Infinity), -Infinity);
		});

		it('should return the difference when -Infinity is passed in', function() {
			assert.equal(calculateNumber('SUBTRACT', -Infinity, 1), -Infinity);
			assert.equal(calculateNumber('SUBTRACT', 1, -Infinity), Infinity);
		});
});
