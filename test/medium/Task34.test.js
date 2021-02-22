const searchRange = require("../../src/medium/Task34");

test("Find the starting and ending position of a '8' value in [5, 7, 7, 8, 8, 10]", () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toStrictEqual([3, 4]);
});

test("Find the starting and ending position of a '6' value in [5, 7, 7, 8, 8, 10]", () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toStrictEqual([-1, -1]);
});

test("Find the starting and ending position of a '0' value in []", () => {
    expect(searchRange([], 0)).toStrictEqual([-1, -1]);
});