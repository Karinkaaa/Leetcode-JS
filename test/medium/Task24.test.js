const { swapPairs, getNodeFromArray } = require("../../src/medium/Task24");

test("Given a linked list [1, 2, 3, 4], swap every two adjacent nodes and return its head", () => {
    const node = getNodeFromArray([1, 2, 3, 4]);
    const expectedNode = getNodeFromArray([2, 1, 4, 3]);

    expect(swapPairs(node)).toStrictEqual(expectedNode);
});

test("Given a linked list [], swap every two adjacent nodes and return its head", () => {
    const node = getNodeFromArray([]);
    expect(swapPairs(node)).toStrictEqual(node);
});

test("Given a linked list [1], swap every two adjacent nodes and return its head", () => {
    const node = getNodeFromArray([1]);
    expect(swapPairs(node)).toStrictEqual(node);
});

test("Given a linked list [1, 2, 3], swap every two adjacent nodes and return its head", () => {
    const node = getNodeFromArray([1, 2, 3]);
    const expectedNode = getNodeFromArray([2, 1, 3]);

    expect(swapPairs(node)).toStrictEqual(expectedNode);
});