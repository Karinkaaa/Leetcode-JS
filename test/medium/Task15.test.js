const threeSum = require("../../src/medium/Task15");

test("Find the unique triplets in [-1, 0, 1, 2, -1, -4] which gives the sum of zero", () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toStrictEqual([[-1, -1, 2], [-1, 0, 1]]);
});

test("Find the unique triplets in [0] which gives the sum of zero", () => {
    expect(threeSum([0])).toStrictEqual([]);
});

test("Find the unique triplets in [] which gives the sum of zero", () => {
    expect(threeSum([])).toStrictEqual([]);
});

test("Find the unique triplets in [0, 0, 0] which gives the sum of zero", () => {
    expect(threeSum([0, 0, 0])).toStrictEqual([[0, 0, 0]]);
});

test("Find the unique triplets in [0, 0, 0, 0] which gives the sum of zero", () => {
    expect(threeSum([0, 0, 0, 0])).toStrictEqual([[0, 0, 0]]);
});

test("Find the unique triplets in [1] which gives the sum of zero", () => {
    expect(threeSum([1])).toStrictEqual([]);
});

test("Find the unique triplets in [1, 1, 1] which gives the sum of zero", () => {
    expect(threeSum([1, 1, 1])).toStrictEqual([]);
});

test("Find the unique triplets in [-1, 0, 1, 0] which gives the sum of zero", () => {
    expect(threeSum([-1, 0, 1, 0])).toStrictEqual([[-1, 0, 1]]);
});

test("Find the unique triplets in [-2, 0, 1, 1, 2] which gives the sum of zero", () => {
    expect(threeSum([-2, 0, 1, 1, 2])).toStrictEqual([[-2, 0, 2], [-2, 1, 1]]);
});

test("Find the unique triplets in [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4] which gives the sum of zero", () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]))
        .toStrictEqual([[-4, 0, 4], [-4, 1, 3], [-3, -1, 4], [-3, 0, 3], [-3, 1, 2], [-2, -1, 3], [-2, 0, 2], [-1, -1, 2], [-1, 0, 1]]);
});
