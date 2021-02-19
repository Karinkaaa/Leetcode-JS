const { mergeKLists, getNodeFromArray } = require("../../src/hard/Task23");

test("Merge all the linked-lists [[1, 4, 5], [1, 3, 4], [2, 6]] into one sorted linked-list and return it", () => {
    const lists = [];
    lists.push(getNodeFromArray([1, 4, 5]));
    lists.push(getNodeFromArray([1, 3, 4]));
    lists.push(getNodeFromArray([2, 6]));

    const expectedNode = getNodeFromArray([1, 1, 2, 3, 4, 4, 5, 6]);
    expect(mergeKLists(lists)).toStrictEqual(expectedNode);
});

test("Merge all the linked-lists [[], [1]] into one sorted linked-list and return it", () => {
    const lists = [];
    lists.push(getNodeFromArray([]));
    lists.push(getNodeFromArray([1]));

    const expectedNode = getNodeFromArray([1]);
    expect(mergeKLists(lists)).toStrictEqual(expectedNode);
});

test("Merge all the linked-lists [[]] into one sorted linked-list and return it", () => {
    const lists = [];
    lists.push(getNodeFromArray([]));

    const expectedNode = getNodeFromArray([]);
    expect(mergeKLists(lists)).toStrictEqual(expectedNode);
});