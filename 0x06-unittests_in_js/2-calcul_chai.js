/**
 * Rounds two numbers, performs one of [+, -, /], and returns the result
 * @param {string} type The operation to perform: one of [+, -, /]
 * @param {number} a The first number
 * @param {number} b The second number
 * @return {number} Sum, quotient or difference of round(a) and round(b) or error string
 */
module.exports = function calculateNumber(type, a, b) {
	switch (type) {
		case 'SUM':
			return Math.round(a) + Math.round(b);

		case 'SUBTRACT':
			return Math.round(a) - Math.round(b);

		case 'DIVIDE':
			b = Math.round(b);

			if (b === 0) {
				return 'Error';
			}

			return Math.round(a) / b;

		default:
			return 'Error';
	}
}
