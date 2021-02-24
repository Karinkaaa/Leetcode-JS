const multiply = require("../../src/medium/Task43");

test("Return the product of '2' and '3', represented as a string", () => {
    expect(multiply("2", "3")).toBe("6");
});

test("Return the product of '123' and '456', represented as a string", () => {
    expect(multiply("123", "456")).toBe("56088");
});

test("Return the product of '123456789' and '987654321', represented as a string", () => {
    expect(multiply("123456789", "987654321")).toBe("121932631112635269");
});
