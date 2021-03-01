/**
 * Finds the contiguous subarray (containing at least one number) which has the largest sum and return its sum
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
    if (nums.length === 1) return nums[0];

    let sum = 0;
    let maxSum = nums[0];

    for (let i = 0; i < nums.length; i++) {
        sum = nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            if (sum > maxSum) maxSum = sum;
            sum += nums[j];
        }

        if (sum > maxSum) maxSum = sum;
    }

    return maxSum;
};

module.exports = maxSubArray;