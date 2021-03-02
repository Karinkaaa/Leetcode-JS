/**
 * Return the length of the last word in the string
 *
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
    let answer = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " ") answer++;
        else if (answer > 0) return answer;
    }

    return answer;
};

module.exports = lengthOfLastWord;