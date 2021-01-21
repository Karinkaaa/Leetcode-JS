const twoSum = require("../../src/easy/Task1");

test("Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});

test("Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target", () => {
    expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
});

test("Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target", () => {
    expect(twoSum([3, 3], 6)).toStrictEqual([0, 1]);
});
