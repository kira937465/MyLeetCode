/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
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

    const count = nums.length;
    return Math.max(_rob(nums, 0, count - 2), _rob(nums, 1, count - 1));
};

var _rob = function (nums, l, r) {
    let pre2 = 0, pre1 = 0;
    for (let i = l; i <= r; i++) {
        const temp = pre1;
        pre1 = Math.max(pre2 + nums[i], pre1);
        pre2 = temp;
    }

    return pre1;
};

