const myPow = require("../../src/medium/Task50");

test("Calculate 2.00000 raised to the power 10", () => {
    expect(myPow(2.00000, 10)).toBe(1024.00000);
});

test("Calculate 2.10000 raised to the power 3", () => {
    expect(myPow(2.10000, 3)).toBe(9.26100);
});

test("Calculate 2.00000 raised to the power -2", () => {
    expect(myPow(2.00000, -2)).toBe(0.25);
});

test("Calculate 8.88023 raised to the power 3", () => {
    expect(myPow(8.88023, 3)).toBe(700.28148);
});

test("Calculate -1 raised to the power 2147483647", () => {
    expect(myPow(-1.00000, 2147483647)).toBe(-1.00000);
});