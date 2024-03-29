/**
 * Returns reversed 32-bit number
 *
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
    // let result = parseInt((x.toString(10).split("").reverse()).join(""), 10);

    let number = Math.abs(x);
    let res = 0;

    while (number > 9) {
        res += (number % 10);
        res *= 10;
        number = parseInt(number / 10, 10);
    }
    res += number;

    if (res > Math.pow(2, 31) || res < Math.pow(-2, 31)) return 0;
    return x < 0 ? -res : res;
};

module.exports = reverse;