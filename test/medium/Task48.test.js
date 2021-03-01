const rotate = require("../../src/medium/Task48");

test("Rotate the 'matrix' [[1, 2, 3], [4, 5, 6], [7, 8, 9]] by 90 degrees", () => {
    const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const expected = [[7, 4, 1], [8, 5, 2], [9, 6, 3]];
    rotate(array);
    expect(array).toStrictEqual(expected);
});

test("Rotate the 'matrix' [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]] by 90 degrees", () => {
    const array = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];
    const expected = [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]];
    rotate(array);
    expect(array).toStrictEqual(expected);
});