/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices || prices.length < 2) {
      return 0;
    }

    let min = Number.MAX_VALUE;
    let result = 0;
    for (let p of prices) {
      result = Math.max(result, p - min);
      min = Math.min(min, p);
    }

    return result;
};

