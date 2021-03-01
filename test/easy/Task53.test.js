const maxSubArray = require("../../src/easy/Task53");

test("Find the contiguous subarray (containing at least one number) in array [-2, 1, -3, 4, -1, 2, 1, -5, 4] which has the largest sum and return its sum", () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
});

test("Find the contiguous subarray (containing at least one number) in array [0] which has the largest sum and return its sum", () => {
    expect(maxSubArray([0])).toBe(0);
});

test("Find the contiguous subarray (containing at least one number) in array [-1] which has the largest sum and return its sum", () => {
    expect(maxSubArray([-1])).toBe(-1);
});

test("Find the contiguous subarray (containing at least one number) in array [1] which has the largest sum and return its sum", () => {
    expect(maxSubArray([1])).toBe(1);
});

test("Find the contiguous subarray (containing at least one number) in array [-2, 1] which has the largest sum and return its sum", () => {
    expect(maxSubArray([-2, 1])).toBe(1);
});

test("Find the contiguous subarray (containing at least one number) in array [-2, -1] which has the largest sum and return its sum", () => {
    expect(maxSubArray([-2, -1])).toBe(-1);
});

test("Find the contiguous subarray (containing at least one number) in array [-1, 0, -2] which has the largest sum and return its sum", () => {
    expect(maxSubArray([-1, 0, -2])).toBe(0);
});