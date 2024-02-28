/**
 * Rounds two numbers and returns their sum
 * @param {Number} a The first number
 * @param {Number} b The second number
 * @returns {Number} Sum of round(a) and round(b)
 */
const calculateNumber = function (a, b) {
	return Math.round(a) + Math.round(b);
};

module.exports = calculateNumber;
