const lengthOfLongestSubstring = require("../../src/medium/Task3");

test("Find the length of the longest substring without repeating characters from 'abcabcbb'", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
});

test("Find the length of the longest substring without repeating characters from 'bbbbb'", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
});

test("Find the length of the longest substring without repeating characters from 'pwwkew'", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
});

test("Find the length of the longest substring without repeating characters from ''", () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
});

test("Find the length of the longest substring without repeating characters from ' '", () => {
    expect(lengthOfLongestSubstring(" ")).toBe(1);
});

test("Find the length of the longest substring without repeating characters from 'au'", () => {
    expect(lengthOfLongestSubstring("au")).toBe(2);
});

test("Find the length of the longest substring without repeating characters from 'aab'", () => {
    expect(lengthOfLongestSubstring("aab")).toBe(2);
});