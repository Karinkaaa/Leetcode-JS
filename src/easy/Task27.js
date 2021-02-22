/**
 * Removes all instances of value in-place and returns the new length
 *
 * @param {[number]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }

    return nums.length;
};

module.exports = removeElement;