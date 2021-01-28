const findMedianSortedArrays = require("../../src/hard/Task4");

test("Find the the median of the two sorted arrays: [1, 3] and [2]", () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
});

test("Find the the median of the two sorted arrays: [1, 2] and [3, 4]", () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
});

test("Find the the median of the two sorted arrays: [0, 0] and [0, 0]", () => {
    expect(findMedianSortedArrays([0, 0], [0, 0])).toBe(0);
});

test("Find the the median of the two sorted arrays: [] and [1]", () => {
    expect(findMedianSortedArrays([], [1])).toBe(1);
});

test("Find the the median of the two sorted arrays: [2] and []", () => {
    expect(findMedianSortedArrays([2], [])).toBe(2);
});

test("Find the the median of the two sorted arrays: [3] and [-2, -1]", () => {
    expect(findMedianSortedArrays([3], [-2, -1])).toBe(-1);
});
