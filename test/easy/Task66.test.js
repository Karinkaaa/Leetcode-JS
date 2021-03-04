const plusOne = require("../../src/easy/Task66");

test("Increment one to the integer [1, 2, 3]", () => {
    expect(plusOne([1, 2, 3])).toStrictEqual([1, 2, 4]);
});

test("Increment one to the integer [4, 3, 2, 1]", () => {
    expect(plusOne([4, 3, 2, 1])).toStrictEqual([4, 3, 2, 2]);
});

test("Increment one to the integer [0]", () => {
    expect(plusOne([0])).toStrictEqual([1]);
});

test("Increment one to the integer [9, 9, 9]", () => {
    expect(plusOne([9, 9, 9])).toStrictEqual([1, 0, 0, 0]);
});

test("Increment one to the integer [8, 9, 9, 9]", () => {
    expect(plusOne([8, 9, 9, 9])).toStrictEqual([9, 0, 0, 0]);
});