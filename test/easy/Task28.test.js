const strStr = require("../../src/easy/Task28");

test("Return the index of the first occurrence of needle 'll' in haystack 'hello', or -1 if needle is not part of haystack", () => {
    expect(strStr("hello", "ll")).toBe(2);
});

test("Return the index of the first occurrence of needle 'bba' in haystack 'aaaaa', or -1 if needle is not part of haystack", () => {
    expect(strStr("aaaaa", "bba")).toBe(-1);
});

test("Return the index of the first occurrence of needle '' in haystack '', or -1 if needle is not part of haystack", () => {
    expect(strStr("", "")).toBe(0);
});

test("Return the index of the first occurrence of needle '' in haystack 'a', or -1 if needle is not part of haystack", () => {
    expect(strStr("", "a")).toBe(-1);
});

test("Return the index of the first occurrence of needle 'a' in haystack '', or -1 if needle is not part of haystack", () => {
    expect(strStr("a", "")).toBe(0);
});

test("Return the index of the first occurrence of needle 'mississippi' in haystack 'issip', or -1 if needle is not part of haystack", () => {
    expect(strStr("mississippi", "issip")).toBe(4);
});

test("Return the index of the first occurrence of needle 'mississippi' in haystack 'issi', or -1 if needle is not part of haystack", () => {
    expect(strStr("mississippi", "issi")).toBe(1);
});

test("Return the index of the first occurrence of needle 'a' in haystack 'a', or -1 if needle is not part of haystack", () => {
    expect(strStr("a", "a")).toBe(0);
});
