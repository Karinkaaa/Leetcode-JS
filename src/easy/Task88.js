/**
 * Merges 'nums1' and 'nums2' into a single array sorted in non-decreasing order
 *
 * @param {[number]} nums1
 * @param {number} m
 * @param {[number]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify 'nums1' in-place instead
 */
const merge = function (nums1, m, nums2, n) {
    if (m > 0) nums1.splice(m);
    else nums1.splice(0, nums1.length);

    if (n > 0) nums2.splice(n);

    nums1.push(...nums2);
    nums1.sort((a, b) => a - b);
};

module.exports = merge;