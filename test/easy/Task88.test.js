const merge = require("../../src/easy/Task88");

test("Merge [1, 2, 3, 0, 0, 0] and [2, 5, 6] into a single array sorted in non-decreasing order", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2 = [2, 5, 6];
    const n = 3;
    const expected = [1, 2, 2, 3, 5, 6];

    merge(nums1, m, nums2, n);
    expect(nums1).toStrictEqual(expected);
});

test("Merge [1] and [] into a single array sorted in non-decreasing order", () => {
    const nums1 = [1];
    const m = 1;
    const nums2 = [];
    const n = 0;
    const expected = [1];

    merge(nums1, m, nums2, n);
    expect(nums1).toStrictEqual(expected);
});

test("Merge [0] and [1] into a single array sorted in non-decreasing order", () => {
    const nums1 = [0];
    const m = 0;
    const nums2 = [1];
    const n = 1;
    const expected = [1];

    merge(nums1, m, nums2, n);
    expect(nums1).toStrictEqual(expected);
});