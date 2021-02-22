const removeDuplicates = require("../../src/easy/Task26");

test("Remove duplicates from sorted array  [1, 1, 2] and return the new length", () => {
    expect(removeDuplicates([1, 1, 2])).toBe(2);
});

test("Remove duplicates from sorted array [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] and return the new length", () => {
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
});
