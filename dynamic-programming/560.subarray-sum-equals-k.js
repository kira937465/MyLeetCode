/*
 * @lc app=leetcode id=560 lang=javascript
 *
 * [560] Subarray Sum Equals K
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let result = 0, sum = 0;
    const preSumMap = new Map();
    preSumMap[0] = 1;

    const len = nums.length;
    for (let i = 0; i < len; i++) {
        sum += nums[i];

        let preSum = preSumMap[sum - k];
        if (preSum !== undefined) {
            result += preSum;
        }
        if (preSumMap[sum] == undefined) {
            preSumMap[sum] = 1;
        } else {
            preSumMap[sum] += 1;
        }
    }

    return result;
};

