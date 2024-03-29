/**
 * Converts num to a roman numeral
 *
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
    const roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let result = "";

    for (const key in roman) {
        if (num === roman[key]) {
            return result += key;
        }

        if (num > roman[key]) {
            result = result + key.repeat(parseInt(num / roman[key]));
            num %= roman[key];
        }
    }

    return result;
};

module.exports = intToRoman;