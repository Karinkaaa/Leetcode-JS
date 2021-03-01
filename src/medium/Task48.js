/**
 * Rotates the 'matrix' by 90 degrees. Doesn't return anything, modifies 'matrix' in-place instead
 *
 * @param {number[][]} matrix
 * @return {void}
 */
const rotate = function (matrix) {
    const length = matrix.length;

    for (let i = 0; i < Math.ceil(length / 2); i++) {
        for (let j = i; j < length - i - 1; j++) {
            let tmpValue = matrix[i][j];
            matrix[i][j] = matrix[length - j - 1][i];
            matrix[length - j - 1][i] = matrix[length - i - 1][length - j - 1];
            matrix[length - i - 1][length - j - 1] = matrix[j][length - i - 1];
            matrix[j][length - i - 1] = tmpValue;
        }
    }
};

module.exports = rotate;