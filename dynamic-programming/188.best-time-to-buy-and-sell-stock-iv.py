#
# @lc app=leetcode id=188 lang=python3
#
# [188] Best Time to Buy and Sell Stock IV
#

"""
注意在 k 值很大的情况下使用贪心算法，不然存储状态的数组会让内存爆掉。
"""
class Solution:
    def maxProfit(self, k: int, prices: List[int]) -> int:
        count = len(prices)
        if k <= 0 or count < 2:
            return 0

        # 交易次数足够在每个相邻的2天之间完成一次买卖
        if k >= count - 1:
            return self.greedy(prices)

        # 第0次持有股票时默认设置为持有第一天股票的收益，以便在迭代到
        # 第一天时更新持有股票的收益时不会有问题(releases[1 - 1] - prices[0] 不会
        # 因为比 holds[1](值为 -prices[0]) 小而无法更新到 holds[1] 上)
        holds = [-prices[0]] * (k + 1)
        releases = [0] * (k + 1)

        for price in prices:
            # 每一天更新 第1次-第k次持有股票时的收益 和 第1次-第k次出售股票后的收益
            for j in range(1, k + 1):
                holds[j] = max(holds[j], releases[j - 1] - price)
                releases[j] = max(releases[j], holds[j] + price)

        return releases[k]

    # 使用贪心算法获得最大收益
    def greedy(self, prices: List[int]) -> int:
        max = 0
        for i, _ in enumerate(prices):
            if i > 0 and prices[i] > prices[i - 1]:
                max += prices[i] - prices[i - 1]
        return max
