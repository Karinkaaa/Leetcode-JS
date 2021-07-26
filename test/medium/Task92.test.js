const { reverseBetween, getNodeFromArray } = require("../../src/medium/Task92");

test("Reverse the nodes of [1, 2, 3, 4, 5] from position 2 to position 4, and return the reversed list", () => {
    const node = getNodeFromArray([1, 2, 3, 4, 5]);
    const left = 2;
    const right = 4;
    const expected = getNodeFromArray([1, 4, 3, 2, 5]);

    expect(reverseBetween(node, left, right)).toStrictEqual(expected);
});

test("Reverse the nodes of [5] from position 1 to position 1, and return the reversed list", () => {
    const node = getNodeFromArray([5]);
    const left = 1;
    const right = 1;
    const expected = getNodeFromArray([5]);

    expect(reverseBetween(node, left, right)).toStrictEqual(expected);
});

test("Reverse the nodes of [3, 5] from position 1 to position 2, and return the reversed list", () => {
    const node = getNodeFromArray([3, 5]);
    const left = 1;
    const right = 2;
    const expected = getNodeFromArray([5, 3]);

    expect(reverseBetween(node, left, right)).toStrictEqual(expected);
});
