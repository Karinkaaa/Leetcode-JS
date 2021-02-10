/**
 * Finds the longest common prefix string amongst an array of strings
 *
 * @param {[string]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";

    const firstString = strs[0];
    let res = "";

    for (let i = 0; i < firstString.length; i++) {
        res += firstString[i];

        for (let j = 1; j < strs.length; j++) {
            if (!strs[j].startsWith(res)) return res.slice(0, res.length - 1);
        }
    }

    return res;
};

module.exports = longestCommonPrefix;