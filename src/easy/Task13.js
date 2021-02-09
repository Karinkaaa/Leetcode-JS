/**
 * Converts roman numerals to integer
 *
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
    const roman = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    };

    let result = 0;
    let firstNumber = 0;
    let secondNumber = 0;

    for (let i = 0; i < s.length; i++) {
        firstNumber = roman[s[i]];
        secondNumber = roman[s[i + 1]];

        if (firstNumber < secondNumber) {
            result += (secondNumber - firstNumber);
            i++;
        } else {
            result += firstNumber;
        }
    }

    return result;
};

module.exports = romanToInt;