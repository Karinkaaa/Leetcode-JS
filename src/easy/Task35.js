/**
 * @param {[number]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
    const index = nums.findIndex(element => element === target);

    if (index === -1) {
        const numsLength = nums.length;

        if (nums[0] > target) {
            return 0;
        } else if (nums[numsLength - 1] < target) {
            return numsLength;
        } else {
            for (let i = 0; i < numsLength - 1; i++) {
                if (nums[i] < target && nums[i + 1] > target) return i + 1;
            }
        }
    }

    return index;
};

module.exports = searchInsert;