const lengthOfLastWord = require("../../src/easy/Task58");

test("Return the length of the last word in the string 'Hello World'", () => {
    expect(lengthOfLastWord("Hello World")).toBe(5);
});

test("Return the length of the last word in the string ' '", () => {
    expect(lengthOfLastWord(" ")).toBe(0);
});

test("Return the length of the last word in the string 'a '", () => {
    expect(lengthOfLastWord("a ")).toBe(1);
});