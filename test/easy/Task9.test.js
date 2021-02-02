const isPalindrome = require("../../src/easy/Task9");

test("Return true if number 121 is palindrome", () => {
    expect(isPalindrome(121)).toBe(true);
});

test("Return true if number -121 is palindrome", () => {
    expect(isPalindrome(-121)).toBe(false);
});

test("Return true if number 10 is palindrome", () => {
    expect(isPalindrome(10)).toBe(false);
});

test("Return true if number -101 is palindrome", () => {
    expect(isPalindrome(-101)).toBe(false);
});