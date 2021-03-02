/**
 * Determines if you are able to reach the last index
 *
 * @param {[number]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
    let reachableIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (reachableIndex < i) return false;
        reachableIndex = Math.max(reachableIndex, i + nums[i]);
    }

    return true;
};

module.exports = canJump;