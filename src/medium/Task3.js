/**
 * Splits string on unique substrings
 *
 * @param {string} string
 * @returns {[string]}
 */
const getUniqueSubstrings = (string) => {
    let index = 0;
    let substrings = [];
    let substring = "";

    for (let i = index; i < string.length; i++) {
        if (substring.includes(string[i])) {
            substrings.push(substring);
            substring = "";
            i = index++;
        } else {
            substring += string[i];
        }
    }

    substrings.push(substring);
    return substrings;
};

/**
 * Gets max length of array item
 *
 * @param {[string]} array
 * @returns {number}
 */
const getItemMaxLength = (array) => {
    let maxLength = 0;

    for (let i = 0; i < array.length; i++) {
        if (maxLength < array[i].length) {
            maxLength = array[i].length;
        }
    }

    return maxLength;
};

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    if (!s) return 0;

    const substrings = getUniqueSubstrings(s);
    return getItemMaxLength(substrings);
};

module.exports = lengthOfLongestSubstring;