const { reverseKGroup, getNodeFromArray } = require("../../src/hard/Task25");

test("Reverse the nodes of a linked list [1, 2, 3, 4, 5] k (2) at a time and return its modified list", () => {
    const node = getNodeFromArray([1, 2, 3, 4, 5]);
    const k = 2;
    const expectedNode = getNodeFromArray([2, 1, 4, 3, 5]);

    expect(reverseKGroup(node, k)).toStrictEqual(expectedNode);
});

test("Reverse the nodes of a linked list [1, 2, 3, 4, 5] k (3) at a time and return its modified list", () => {
    const node = getNodeFromArray([1, 2, 3, 4, 5]);
    const k = 3;
    const expectedNode = getNodeFromArray([3, 2, 1, 4, 5]);

    expect(reverseKGroup(node, k)).toStrictEqual(expectedNode);
});

test("Reverse the nodes of a linked list [1, 2, 3, 4, 5] k (1) at a time and return its modified list", () => {
    const node = getNodeFromArray([1, 2, 3, 4, 5]);
    const k = 1;

    expect(reverseKGroup(node, k)).toStrictEqual(node);
});

test("Reverse the nodes of a linked list [1] k (1) at a time and return its modified list", () => {
    const node = getNodeFromArray([1]);
    const k = 1;

    expect(reverseKGroup(node, k)).toStrictEqual(node);
});

test("Reverse the nodes of a linked list [1, 2] k (2) at a time and return its modified list", () => {
    const node = getNodeFromArray([1, 2]);
    const k = 2;
    const expectedNode = getNodeFromArray([2, 1]);

    expect(reverseKGroup(node, k)).toStrictEqual(expectedNode);
});