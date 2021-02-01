/**
 * Returns the longest palindromic substring in s
 *
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
    if (!s || s.length < 1) return "";
    if (s.length === 2 && s[0] !== s[1]) return s[0];

    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        const length1 = expandAroundCenter(s, i, i);
        const length2 = expandAroundCenter(s, i, i + 1);
        const maxLength = Math.max(length1, length2);

        if (maxLength > end - start) {
            start = Math.ceil(i - (maxLength - 1) / 2);
            end = Math.floor(i + maxLength / 2);
        }
    }

    return s.substring(start, end + 1);
};

const expandAroundCenter = (s, left, right) => {
    let L = left;
    let R = right;

    while (L >= 0 && R < s.length && s[L] === s[R]) {
        L--;
        R++;
    }

    return R - L - 1;
};

module.exports = longestPalindrome;