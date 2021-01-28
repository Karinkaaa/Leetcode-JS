/**
 * Finds median of the two sorted arrays
 *
 * @param {[number]} nums1
 * @param {[number]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
    const mergedSortedArray = nums1.concat(nums2).sort((a, b) => a - b);
    const arrayLength = mergedSortedArray.length;

    if (arrayLength % 2 === 1) {
        return mergedSortedArray[Math.floor(arrayLength / 2)];
    } else {
        const firstIndex = arrayLength / 2;
        const secondIndex = firstIndex - 1;

        return (mergedSortedArray[firstIndex] + mergedSortedArray[secondIndex]) / 2;
    }
};

module.exports = findMedianSortedArrays;