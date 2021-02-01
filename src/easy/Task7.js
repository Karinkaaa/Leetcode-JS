/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
    // let result = parseInt((x.toString(10).split("").reverse()).join(""), 10);

    const maxValue = Math.pow(2, 31);
    const minValue = 1 + Math.pow(-2, 31);

    let number = Math.abs(x);
    let res = 0;

    while (number > 9) {
        res += (number % 10);
        res *= 10;

        number = parseInt(number / 10, 10);
    }
    res += number;

    if (res > maxValue || res < minValue) return 0;
    return x < 0 ? -res : res;
};

module.exports = reverse;