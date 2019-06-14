/*
 * @lc app=leetcode id=123 lang=javascript
 *
 * [123] Best Time to Buy and Sell Stock III
 */
/**
 * 理解为处理4个阶段(持有第一笔股票，已卖出第一笔股票，持有第二笔股票，已卖出第二笔股票)。
 * 遍历每个交易日时后续交易不会影响之前的状态，存在最优子结构，可以使用动态规划递推。
 * 节省存储状态的空间，可以倒序更新状态(release2 -> hold2 -> release1 -> hold1)。
 * 
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!prices || prices.length < 2) {
    return 0;
  }

  let hold1 = -prices[0], hold2 = -prices[0];
  let release1 = 0, release2 = 0;
  for (const price of prices) {
    release2 = Math.max(release2, hold2 + price);
    hold2 = Math.max(hold2, release1 - price);
    release1 = Math.max(release1, hold1 + price);
    hold1 = Math.max(hold1, -price);
  }

  // release2不会比release1小，所以直接返回release2即可
  return release2;
};

