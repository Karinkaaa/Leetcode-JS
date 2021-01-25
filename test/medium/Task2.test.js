const { addTwoNumbers, getNodeFromArray } = require("../../src/medium/Task2");

test("Add the two numbers ([2, 4, 3], [5, 6, 4]) and return the sum as a linked list", () => {
    const l1 = getNodeFromArray([2, 4, 3]);
    const l2 = getNodeFromArray([5, 6, 4]);
    const expected = getNodeFromArray([7, 0, 8]);

    expect(addTwoNumbers(l1, l2)).toStrictEqual(expected);
});

test("Add the two numbers ([0], [0]) and return the sum as a linked list", () => {
    const l1 = getNodeFromArray([0]);
    const l2 = getNodeFromArray([0]);
    const expected = getNodeFromArray([0]);

    expect(addTwoNumbers(l1, l2)).toStrictEqual(expected);
});

test("Add the two numbers ([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]) and return the sum as a linked list", () => {
    const l1 = getNodeFromArray([9, 9, 9, 9, 9, 9, 9]);
    const l2 = getNodeFromArray([9, 9, 9, 9]);
    const expected = getNodeFromArray([8, 9, 9, 9, 0, 0, 0, 1]);

    expect(addTwoNumbers(l1, l2)).toStrictEqual(expected);
});

test("Add the two numbers ([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [5, 6, 4) and return the sum as a linked list", () => {
    const l1 = getNodeFromArray([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    const l2 = getNodeFromArray([5, 6, 4]);
    const expected = getNodeFromArray([6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);

    expect(addTwoNumbers(l1, l2)).toStrictEqual(expected);
});

test("Add the two numbers ([1, 2, 3, 4, 5, 6], [7, 8, 9]) and return the sum as a linked list", () => {
    const l1 = getNodeFromArray([1, 2, 3, 4, 5, 6]);
    const l2 = getNodeFromArray([7, 8, 9]);
    const expected = getNodeFromArray([8, 0, 3, 5, 5, 6]);

    expect(addTwoNumbers(l1, l2)).toStrictEqual(expected);
});

test("Add the two numbers ([2, 4, 9], [5, 6, 4, 9]) and return the sum as a linked list", () => {
    const l1 = getNodeFromArray([2, 4, 9]);
    const l2 = getNodeFromArray([5, 6, 4, 9]);
    const expected = getNodeFromArray([7, 0, 4, 0, 1]);

    expect(addTwoNumbers(l1, l2)).toStrictEqual(expected);
});

test("Add the two numbers ([5], [5]) and return the sum as a linked list", () => {
    const l1 = getNodeFromArray([5]);
    const l2 = getNodeFromArray([5]);
    const expected = getNodeFromArray([0, 1]);

    expect(addTwoNumbers(l1, l2)).toStrictEqual(expected);
});
