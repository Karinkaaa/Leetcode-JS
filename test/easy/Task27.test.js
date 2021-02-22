const removeElement = require("../../src/easy/Task27");

test("Remove all instances of value '3' from array [3, 2, 2, 3] in-place and return the new length", () => {
    expect(removeElement([3, 2, 2, 3], 3)).toBe(2);
});

test("Remove all instances of value '5' from array [0, 1, 2, 2, 3, 0, 4, 2] in-place and return the new length", () => {
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5);
});
