const canJump = require("../../src/medium/Task55");

test("Determine if you are able to reach the last index of array [2, 3, 1, 1, 4]", () => {
    expect(canJump([2, 3, 1, 1, 4])).toBe(true);
});

test("Determine if you are able to reach the last index of array [3, 2, 1, 0, 4]", () => {
    expect(canJump([3, 2, 1, 0, 4])).toBe(false);
});

test("Determine if you are able to reach the last index of array [0, 1]", () => {
    expect(canJump([0, 1])).toBe(false);
});

test("Determine if you are able to reach the last index of array [1]", () => {
    expect(canJump([1])).toBe(true);
});

test("Determine if you are able to reach the last index of array [0]", () => {
    expect(canJump([0])).toBe(true);
});

test("Determine if you are able to reach the last index of array [1, 3, 2]", () => {
    expect(canJump([1, 3, 2])).toBe(true);
});

test("Determine if you are able to reach the last index of array [2, 0, 0]", () => {
    expect(canJump([2, 0, 0])).toBe(true);
});

test("Determine if you are able to reach the last index of array [2, 5, 0, 0]", () => {
    expect(canJump([2, 5, 0, 0])).toBe(true);
});