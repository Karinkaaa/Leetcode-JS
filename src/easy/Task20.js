/**
 * Determines if the input string is valid
 *
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    if (!s || s.length === 1 || s.length % 2 === 1) return false;

    const parentheses = {
        "(": ")",
        "[": "]",
        "{": "}"
    };

    for (let i = 0; i < s.length - 2; i++) {
        if (parentheses[s[i]] === s[i + 1]) {
            s = s.substring(0, i) + s.substring(i + 2);
            i = -1;
        }
    }

    return s.length === 2 && parentheses[s[0]] === s[1];
};

module.exports = isValid;