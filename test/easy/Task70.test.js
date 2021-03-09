const climbStairs = require("../../src/easy/Task70");

test("Computes in how many distinct ways can you climb to the top (2)", () => {
    expect(climbStairs(2)).toBe(2);
});

test("Computes in how many distinct ways can you climb to the top (3)", () => {
    expect(climbStairs(3)).toBe(3);
});

test("Computes in how many distinct ways can you climb to the top (5)", () => {
    expect(climbStairs(5)).toBe(8);
});