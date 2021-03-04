const { rotateRight, getNodeFromArray } = require("../../src/medium/Task61");

test("Rotate the list to the right by 2 places", () => {
    const head = getNodeFromArray([1, 2, 3, 4, 5]);
    const expected = getNodeFromArray([4, 5, 1, 2, 3]);

    expect(rotateRight(head, 2)).toStrictEqual(expected);
});

test("Rotate the list to the right by 4 places", () => {
    const head = getNodeFromArray([0, 1, 2]);
    const expected = getNodeFromArray([2, 0, 1]);

    expect(rotateRight(head, 4)).toStrictEqual(expected);
});

test("Rotate the list to the right by 0 places", () => {
    const head = getNodeFromArray([]);
    expect(rotateRight(head, 0)).toStrictEqual(head);
});
