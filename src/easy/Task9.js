/**
 * Returns true if x is palindrome integer
 *
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
    return parseInt((x.toString(10).split("").reverse()).join(""), 10) === x;
};

module.exports = isPalindrome;