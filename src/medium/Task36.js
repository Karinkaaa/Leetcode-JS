/**
 * Determines if a 9x9 Sudoku board is valid
 *
 * @param {string[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
    const isValidHorizontals = isValidHorizontalLines(board);
    const isValidVerticals = isValidVerticalLines(board);
    const isValidCellBlocks = isValidAllCellBlocks(board);

    return isValidHorizontals && isValidVerticals && isValidCellBlocks;

    // for (let i = 0; i < 9; i++) {
    //     let row = new Set(),
    //         col = new Set(),
    //         box = new Set();
    //
    //     for (let j = 0; j < 9; j++) {
    //         let _row = board[i][j];
    //         let _col = board[j][i];
    //         let _box = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];
    //
    //         if (_row !== ".") {
    //             if (row.has(_row)) return false;
    //             row.add(_row);
    //         }
    //         if (_col !== ".") {
    //             if (col.has(_col)) return false;
    //             col.add(_col);
    //         }
    //
    //         if (_box !== ".") {
    //             if (box.has(_box)) return false;
    //             box.add(_box);
    //         }
    //     }
    // }
    // return true;
};

const boardLength = 9;
const cellBlockLength = 3;

/**
 * Gets values array from horizontal board line
 *
 * @param {[string]} boardLine
 * @returns {[number]}
 */
const getValuesFromHorizontalLine = (boardLine) => {
    const result = [];

    for (let i = 0; i < boardLength; i++) {
        if (boardLine[i] > 0 && boardLine[i] <= boardLength) result.push(boardLine[i]);
    }

    return result;
};

/**
 * Gets values array from vertical board line
 *
 * @param {string[][]} board
 * @param {number} i
 * @returns {[number]}
 */
const getValuesFromVerticalLine = (board, i) => {
    const result = [];

    for (let j = 0; j < boardLength; j++) {
        if (board[j][i] > 0 && board[j][i] <= boardLength) result.push(board[j][i]);
    }

    return result;
};

/**
 * Converts two dimensional array to one dimensional array
 *
 * @param {number[][]} array
 * @returns {[number]}
 */
const concatenateTwoDimensionalArray = (array) => {
    const result = [];
    let tmpArray = [];

    for (let i = 0; i < array.length; i++) {
        tmpArray = array[i];

        for (let j = 0; j < tmpArray.length; j++) {
            result.push(tmpArray[j]);
        }
    }

    return result;
};

/**
 * Checks if the array contains duplicates and returns 'true' or 'false'
 *
 * @param {[number]} array
 * @returns {boolean}
 */
const isValidArray = (array) => {
    array.sort((a, b) => a - b);

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === array[i + 1]) return false;
    }

    return true;
};

/**
 * Checks if the all cell blocks 3x3 are valid and returns 'true' or 'false'
 *
 * @param {string[][]} board
 * @returns {boolean}
 */
const isValidAllCellBlocks = (board) => {
    for (let i = 0; i < boardLength; i += cellBlockLength) {
        if (!isValidBoardCellBlock(board.slice(i, i + cellBlockLength))) return false;
    }

    return true;
};

/**
 * Checks if the cell block 3x3 are valid and returns 'true' or 'false'
 *
 * @param {string[][]} cellBlock
 * @returns {boolean}
 */
const isValidBoardCellBlock = (cellBlock) => {
    let tmpArray;

    for (let i = 0; i < boardLength; i += cellBlockLength) {
        tmpArray = [];

        for (let j = 0; j < cellBlockLength; j++) {
            tmpArray.push(getValuesFromHorizontalLine(cellBlock[j].slice(i, i + cellBlockLength)));
        }

        tmpArray = concatenateTwoDimensionalArray(tmpArray);

        if (!isValidArray(tmpArray)) return false;
    }

    return true;
};

/**
 * Checks if the horizontal lines are valid and returns 'true' or 'false'
 *
 * @param {string[][]} board
 * @returns {boolean}
 */
const isValidHorizontalLines = (board) => {
    let tmpArray;

    for (let i = 0; i < boardLength; i++) {
        tmpArray = getValuesFromHorizontalLine(board[i]);

        if (!isValidArray(tmpArray)) return false;
    }

    return true;
};

/**
 * Checks if the vertical lines are valid and returns 'true' or 'false'
 *
 * @param {string[][]}board
 * @returns {boolean}
 */
const isValidVerticalLines = (board) => {
    let tmpArray;

    for (let i = 0; i < boardLength; i++) {
        tmpArray = getValuesFromVerticalLine(board, i);

        if (!isValidArray(tmpArray)) return false;
    }

    return true;
};

module.exports = isValidSudoku;