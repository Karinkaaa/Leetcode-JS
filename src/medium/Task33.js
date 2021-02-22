/**
 * Returns the index of 'target' if it's in 'nums', or -1 if it isn't in 'nums'
 *
 * @param {[number]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    return nums.findIndex(element => element === target);
};

module.exports = search;