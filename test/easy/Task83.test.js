const { deleteDuplicates, getNodeFromArray } = require("../../src/easy/Task83");

test("Delete all duplicates from [1, 1, 2]", () => {
    const head = getNodeFromArray([1, 1, 2]);
    const expected = getNodeFromArray([1, 2]);

    expect(deleteDuplicates(head)).toStrictEqual(expected);
});

test("Delete all duplicates from [1, 1, 2, 3, 3]", () => {
    const head = getNodeFromArray([1, 1, 2, 3, 3]);
    const expected = getNodeFromArray([1, 2, 3]);

    expect(deleteDuplicates(head)).toStrictEqual(expected);
});
