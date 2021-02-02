/**
 * Converts a string to 32-bit signed integer
 *
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (s) {
    let res = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] >= 0 && s[i] <= 9 || s[i] === "-" || s[i] === "+") {
            res += s[i];
        } else {
            break;
        }
    }

    return convertStringToNumber(res) || 0;
};

const convertStringToNumber = (str) => {
    const result = parseInt(str, 10);
    const maxValue = Math.pow(2, 31) - 1;
    const minValue = Math.pow(-2, 31);

    if (result > maxValue) return maxValue;
    else if (result < minValue) return minValue;
    return result;
};

module.exports = myAtoi;