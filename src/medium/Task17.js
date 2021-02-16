/**
 * Concatenates two arrays returning all possible letter combinations
 *
 * @param {[string]} array1
 * @param {[string]} array2
 * @return {[string]}
 */
const concatenateTwoArrays = (array1, array2) => {
    if (array1.length === 0) return array2;
    else if (array2.length === 0) return array1;

    const result = [];

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            result.push(array1[i] + array2[j]);
        }
    }

    return result;
};

/**
 * Returns all possible letter combinations that the number could represent
 *
 * @param {string} digits
 * @return {[string]}
 */
const letterCombinations = function (digits) {
    if (!digits) return [];

    const letterCombinations = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    };

    if (digits < 10) return letterCombinations[digits];
    let res = digits.split("");

    return res.reduce((previousValue, currentValue) =>
        concatenateTwoArrays(previousValue, letterCombinations[currentValue]), []);
};

module.exports = letterCombinations;