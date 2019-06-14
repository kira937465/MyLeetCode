#
# @lc app=leetcode id=309 lang=python3
#
# [309] Best Time to Buy and Sell Stock with Cooldown
#


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if len(prices) < 2:
            return 0

        hold, release, pre_hold, pre_release = -prices[0], 0, 0, 0
        for price in prices:
          pre_hold = hold
          hold = max(pre_release - price, pre_hold)
          pre_release = release
          release = max(pre_hold + price, pre_release)
        
        return release
