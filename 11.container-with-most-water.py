#
# @lc app=leetcode id=11 lang=python3
#
# [11] Container With Most Water
#


class Solution:
    def maxArea(self, height: List[int]) -> int:
        result = 0 
        x = len(height) - 1
        y = 0
        while x != y:
            if height[x] > height[y]:
                area = height[y] * (x - y)
                y += 1
            else:
                area = height[x] * (x - y)
                x -= 1
            result = max(result, area)
        return result
