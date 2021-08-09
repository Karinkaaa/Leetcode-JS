/**
 * Returns the sum of 'num1' and 'num2' as a string
 *
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function (num1, num2) {
    return `${BigInt(num1) + BigInt(num2)}`;
};

module.exports = addStrings;