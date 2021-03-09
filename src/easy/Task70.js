/**
 * Computes in how many distinct ways can you climb to the top
 *
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
    if (n <= 3) return n;

    let one = 1;
    let two = 2;
    let countVariants = 0;

    for (let i = 3; i <= n; i++) {
        countVariants = one + two;
        one = two;
        two = countVariants;
    }

    return countVariants;
};

module.exports = climbStairs;