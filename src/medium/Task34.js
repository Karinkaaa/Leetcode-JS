/**
 * Finds the starting and ending position of a 'target' value
 *
 * @param {[number]} nums
 * @param {number} target
 * @return {[number]}
 */
const searchRange = function (nums, target) {
    const result = [];

    result.push(nums.findIndex(element => element === target));
    result.push(nums.lastIndexOf(target));

    return result;
};

module.exports = searchRange;