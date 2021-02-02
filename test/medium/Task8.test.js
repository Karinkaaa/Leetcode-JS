const myAtoi = require("../../src/medium/Task8");

test("Convert a string '42' to a 32-bit signed integer", () => {
    expect(myAtoi("42")).toBe(42);
});

test("Convert a string '   -42' to a 32-bit signed integer", () => {
    expect(myAtoi("   -42")).toBe(-42);
});

test("Convert a string '4193 with words' to a 32-bit signed integer", () => {
    expect(myAtoi("4193 with words")).toBe(4193);
});

test("Convert a string '-91283472332' to a 32-bit signed integer", () => {
    expect(myAtoi("-91283472332")).toBe(-2147483648);
});

test("Convert a string 'words and 987' to a 32-bit signed integer", () => {
    expect(myAtoi("words and 987")).toBe(0);
});

test("Convert a string '+1' to a 32-bit signed integer", () => {
    expect(myAtoi("+1")).toBe(1);
});

test("Convert a string '21474836460' to a 32-bit signed integer", () => {
    expect(myAtoi("21474836460")).toBe(2147483647);
});