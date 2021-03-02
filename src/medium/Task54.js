/**
 * Returns all elements of the 'matrix' in spiral order
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
    const ZERO = 0;
    const result = [];

    if (matrix[ZERO].length === 1) {
        for (let i = 0; i < matrix.length; i++) {
            result.push(matrix[i][ZERO]);
        }
    } else if (matrix[ZERO].length === 2) {
        result.push(matrix[ZERO].shift());

        for (let i = 0; i < matrix.length; i++) {
            result.push(matrix[i].pop());
        }
        matrix.shift();

        for (let i = matrix.length - 1; i >= 0; i--) {
            result.push(matrix[i].shift());
        }
    } else {
        while (matrix.length > 0) {
            while (matrix[ZERO].length !== 0) {
                result.push(matrix[ZERO].shift());
            }

            for (let j = 1; j < matrix.length; j++) {
                result.push(matrix[j].pop());
            }
            matrix.shift();

            if (matrix.length === 0) return result;

            while (matrix[matrix.length - 1].length > 0) {
                result.push(matrix[matrix.length - 1].pop());
            }
            matrix.pop();

            if (matrix[ZERO] && !matrix[ZERO][ZERO]) return result;

            for (let j = matrix.length - 1; j >= 0; j--) {
                result.push(matrix[j].shift());
            }
        }
    }

    return result;
};

module.exports = spiralOrder;