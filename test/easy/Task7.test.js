const reverse = require("../../src/easy/Task7");

test("Get reversed number 123", () => {
    expect(reverse(123)).toBe(321);
});

test("Get reversed number -123", () => {
    expect(reverse(-123)).toBe(-321);
});

test("Get reversed number 120", () => {
    expect(reverse(120)).toBe(21);
});

test("Get reversed number 0", () => {
    expect(reverse(0)).toBe(0);
});

test("Get reversed number 1534236469", () => {
    expect(reverse(1534236469)).toBe(0);
});