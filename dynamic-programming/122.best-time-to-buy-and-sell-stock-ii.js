/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!prices || prices.length < 2) {
    return 0;
  }

  let result = 0;
  const count = prices.length;
  for (let i = 1; i < count; i++) {
    const profit = prices[i] - prices[i - 1];
    if (profit > 0) {
      result += profit;
    }
  }

  return result;
};

