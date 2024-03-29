/**
 * Computes and returns the square root of 'x'
 *
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
    // return Math.floor(x ** (1 / 2));

    for (let i = 0; i < 46342; i++) {
        if (i * i === x) return i;
        else if (i * i > x) return i - 1;
    }
};

module.exports = mySqrt;