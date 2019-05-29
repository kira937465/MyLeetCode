/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (!nums || nums.length <= 0) {
        return 0;
    } else if (nums.length == 1) {
        return nums[0];
    }

    let preSum = 0, curSum = nums[0];
    const count = nums.length;
    for (let i = 1; i < count; i++) {
        const temp = curSum;
        curSum = Math.max(preSum + nums[i], curSum);
        preSum = temp;
    }

    return curSum;
};

