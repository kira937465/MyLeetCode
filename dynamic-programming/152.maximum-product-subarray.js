/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */
/**
 * 可以使用动态规划求解，遍历到数组每个下标时都可以视为一个阶段，前面阶段乘积
 * 的最小和最大值都不会受之后阶段的影响(因为存在负数所以需要引入最小值，用于后阶段
 * 判断是否可以利用最小值乘负值变成最大值)。数组遍历完毕即可得到最终的整体最大值。
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (!nums || nums.length <= 0) {
    return 0;
  }

  const firstNum = nums[0];
  let [totalMax, localMin, localMax] = [firstNum, firstNum, firstNum];
  const count = nums.length;
  for (let i = 1; i < count; i++) {
    const num = nums[i];

    if (num > 0) {
      localMin = localMin * num;
      localMax = Math.max(localMax * num, num);
    } else {
      const temp = localMin;
      localMin = Math.min(localMax * num, num);
      localMax = temp * num;
    }

    totalMax = Math.max(localMax, totalMax);
  }

  return totalMax;
};

