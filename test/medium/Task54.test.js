const spiralOrder = require("../../src/medium/Task54");

test("Return all elements of the matrix [[1, 2, 3], [4, 5, 6], [7, 8, 9]] in spiral order", () => {
    expect(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toStrictEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
});

test("Return all elements of the matrix [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]] in spiral order", () => {
    expect(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])).toStrictEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
});

test("Return all elements of the matrix [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]] in spiral order", () => {
    expect(spiralOrder([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]]))
        .toStrictEqual([1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]);
});

test("Return all elements of the matrix [[7], [9], [6]] in spiral order", () => {
    expect(spiralOrder([[7], [9], [6]])).toStrictEqual([7, 9, 6]);
});

test("Return all elements of the matrix [[7, 9, 6]] in spiral order", () => {
    expect(spiralOrder([[7, 9, 6]])).toStrictEqual([7, 9, 6]);
});

test("Return all elements of the matrix [[2, 3, 4], [5, 6, 7], [8, 9, 10], [11, 12, 13], [14, 15, 16]] in spiral order", () => {
    expect(spiralOrder([[2, 3, 4], [5, 6, 7], [8, 9, 10], [11, 12, 13], [14, 15, 16]]))
        .toStrictEqual([2, 3, 4, 7, 10, 13, 16, 15, 14, 11, 8, 5, 6, 9, 12]);
});

test("Return all elements of the matrix [[1, 11], [2, 12], [3, 13], [4, 14], [5, 15], [6, 16], [7, 17], [8, 18], [9, 19], [10, 20]] in spiral order", () => {
    expect(spiralOrder([[1, 11], [2, 12], [3, 13], [4, 14], [5, 15], [6, 16], [7, 17], [8, 18], [9, 19], [10, 20]]))
        .toStrictEqual([1, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2]);
});
