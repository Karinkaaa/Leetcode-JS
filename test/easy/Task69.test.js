const mySqrt = require("../../src/easy/Task69");

test("Compute and return the square root of 4", () => {
    expect(mySqrt(4)).toBe(2);
});

test("Compute and return the square root of 8", () => {
    expect(mySqrt(8)).toBe(2);
});

test("Compute and return the square root of 36", () => {
    expect(mySqrt(36)).toBe(6);
});

test("Compute and return the square root of 2147395599", () => {
    expect(mySqrt(2147395599)).toBe(46339);
});

test("Compute and return the square root of 2147483647", () => {
    expect(mySqrt(2147483647)).toBe(46340);
});

