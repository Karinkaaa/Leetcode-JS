/**
 * Returns the product of 'num1' and 'num2', represented as a string
 *
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function (num1, num2) {
    return BigInt(num1) * BigInt(num2) + "";
};

module.exports = multiply;