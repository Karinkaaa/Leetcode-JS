/**
 * Calculates 'x' raised to the power 'n'
 *
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function (x, n) {
    if (n === 0) return 1;

    if (Math.abs(x) === 1) {
        return n % 2 === 0 ? Math.abs(x) : x;
    }

    let result = 1;
    for (let i = 0; i < Math.abs(n); i++) {
        result *= x;
    }

    if (n < 0) result = 1 / result;

    // return x ** n;
    return parseFloat(result.toFixed(5));
};

module.exports = myPow;