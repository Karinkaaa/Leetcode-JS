const countAndSay = require("../../src/medium/Task38");

test("Convert the saying '1' into a digit string", () => {
    expect(countAndSay(1)).toBe("1");
});

test("Convert the saying '2' into a digit string", () => {
    expect(countAndSay(2)).toBe("11");
});

test("Convert the saying '4' into a digit string", () => {
    expect(countAndSay(4)).toBe("1211");
});

test("Convert the saying '5' into a digit string", () => {
    expect(countAndSay(5)).toBe("111221");
});