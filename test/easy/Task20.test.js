const isValid = require("../../src/easy/Task20");

test("Determine if the input string '()' is valid", () => {
    expect(isValid("()")).toBe(true);
});

test("Determine if the input string '()[]{}' is valid", () => {
    expect(isValid("()[]{}")).toBe(true);
});

test("Determine if the input string '(]' is valid", () => {
    expect(isValid("(]")).toBe(false);
});

test("Determine if the input string '([)]' is valid", () => {
    expect(isValid("([)]")).toBe(false);
});

test("Determine if the input string '{[]}' is valid", () => {
    expect(isValid("{[]}")).toBe(true);
});

test("Determine if the input string '(){}}{' is valid", () => {
    expect(isValid("(){}}{")).toBe(false);
});

test("Determine if the input string '))' is valid", () => {
    expect(isValid("))")).toBe(false);
});

test("Determine if the input string '()))' is valid", () => {
    expect(isValid("()))")).toBe(false);
});
