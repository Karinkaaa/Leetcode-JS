/**
 * Returns the index of the first occurrence of 'needle' in 'haystack', or -1 if 'needle' is not part of 'haystack'
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
    if ((haystack.length === 0 && needle.length === 0) || needle.length === 0) return 0;

    const needleLength = needle.length;

    for (let i = 0; i < haystack.length; i++) {
        if (haystack.substring(i, i + needleLength) === needle) return i;
    }

    return -1;
};

module.exports = strStr;