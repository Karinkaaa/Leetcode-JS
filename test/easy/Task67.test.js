const addBinary = require("../../src/easy/Task67");

test("Return the sum of two binary strings '11' and '1' as a binary string", () => {
    expect(addBinary("11", "1")).toBe("100");
});

test("Return the sum of two binary strings '1010' and '1011' as a binary string", () => {
    expect(addBinary("1010", "1011")).toBe("10101");
});

test("Return the sum of two binary strings '0' and '0' as a binary string", () => {
    expect(addBinary("0", "0")).toBe("0");
});

test("Return the sum of two binary strings '1' and '111' as a binary string", () => {
    expect(addBinary("1", "111")).toBe("1000");
});