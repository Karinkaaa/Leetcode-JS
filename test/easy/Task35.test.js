const searchInsert = require("../../src/easy/Task35");

test("Return the index if the target '5' is found in [1, 3, 5, 6]. If not, return the index where it would be if it were inserted in order", () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
});

test("Return the index if the target '2' is found in [1, 3, 5, 6]. If not, return the index where it would be if it were inserted in order", () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
});

test("Return the index if the target '7' is found in [1, 3, 5, 6]. If not, return the index where it would be if it were inserted in order", () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
});

test("Return the index if the target '0' is found in [1, 3, 5, 6]. If not, return the index where it would be if it were inserted in order", () => {
    expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
});

test("Return the index if the target '0' is found in [1]. If not, return the index where it would be if it were inserted in order", () => {
    expect(searchInsert([1], 0)).toBe(0);
});
