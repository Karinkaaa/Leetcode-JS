let { removeNthFromEnd, getNodeFromArray } = require("../../src/medium/Task19");

test("Remove the 2th node from the end of the list [1, 2, 3, 4, 5]", () => {
    let node = getNodeFromArray([1, 2, 3, 4, 5]);
    node = removeNthFromEnd(node, 2);
    expect(node).toStrictEqual(getNodeFromArray([1, 2, 3, 5]));
});

test("Remove the 1th node from the end of the list [1]", () => {
    let node = getNodeFromArray([1]);
    node = removeNthFromEnd(node, 1);
    expect(node).toStrictEqual(getNodeFromArray([]));
});

test("Remove the 1th node from the end of the list [1, 2]", () => {
    let node = getNodeFromArray([1, 2]);
    node = removeNthFromEnd(node, 1);
    expect(node).toStrictEqual(getNodeFromArray([1]));
});

test("Remove the 2th node from the end of the list [1, 2]", () => {
    let node = getNodeFromArray([1, 2]);
    node = removeNthFromEnd(node, 2);
    expect(node).toStrictEqual(getNodeFromArray([2]));
});

test("Remove the 2th node from the end of the list [1, 2, 3]", () => {
    let node = getNodeFromArray([1, 2, 3]);
    node = removeNthFromEnd(node, 3);
    expect(node).toStrictEqual(getNodeFromArray([2, 3]));
});
