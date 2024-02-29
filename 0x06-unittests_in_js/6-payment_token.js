/**
 * Simulates getting a payment token from an API
 * @param {boolean} success The function returns a resolved promise when this is true
 * @returns {Promise}
 */
module.exports = function getPaymentTokenFromAPI (success) {
    if (success) {
        return Promise.resolve({data: 'Successful response from the API'});
    }
}
