const { mergeTwoLists, getNodeFromArray } = require("../../src/easy/Task21");

test("Merge two sorted linked lists [1, 2, 4], [1 ,3, 4] and return it as a sorted list", () => {
    const firstNode = getNodeFromArray([1, 2, 4]);
    const secondNode = getNodeFromArray([1, 3, 4]);
    const expectedNode = getNodeFromArray([1, 1, 2, 3, 4, 4]);

    expect(mergeTwoLists(firstNode, secondNode)).toStrictEqual(expectedNode);
});

test("Merge two sorted linked lists [], [] and return it as a sorted list", () => {
    const node = getNodeFromArray([]);
    expect(mergeTwoLists(node, node)).toStrictEqual(node);
});

test("Merge two sorted linked lists [], [0] and return it as a sorted list", () => {
    const firstNode = getNodeFromArray([]);
    const secondNode = getNodeFromArray([0]);

    expect(mergeTwoLists(firstNode, secondNode)).toStrictEqual(secondNode);
});
