const search = require("../../src/medium/Task33");

test("Return the index of '0' if it's in [4, 5, 6, 7, 0, 1, 2], or -1 if it isn't", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
});

test("Return the index of '3' if it's in [4, 5, 6, 7, 0, 1, 2], or -1 if it isn't", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
});

test("Return the index of '0' if it's in [1], or -1 if it isn't", () => {
    expect(search([1], 0)).toBe(-1);
});
