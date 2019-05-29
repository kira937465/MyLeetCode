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
    }

    let pre2 = 0, pre1 = 0;
    for (const num of nums) {
        const temp = pre1;
        pre1 = Math.max(pre2 + num, pre1);
        pre2 = temp;
    }

    return pre1;
};

