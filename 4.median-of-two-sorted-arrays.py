#
# @lc app=leetcode id=4 lang=python3
#
# [4] Median of Two Sorted Arrays
#


class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        m, n = len(nums1), len(nums2)
        # 使得 nums1 长度小于 nums2，便于后面迭代。因为长度小的数组遍历到边界时也不会引起
        # 长度更长的数组里的游标越界。
        if m > n:
            nums1, nums2, m, n = nums2, nums1, n, m

        imin, imax, half_len = 0, m, (m + n + 1) // 2
        while imin <= imax:
            i = (imin + imax) // 2
            j = max(0, half_len - i)
            if i < m and nums2[j - 1] > nums1[i]:
                # i is too small, must increase it
                imin = i + 1
            elif i > 0 and nums1[i - 1] > nums2[j]:
                # i is too big, must decrease it
                imax = i - 1
            else:
                # i is perfect

                if i == 0: # nums1所有部分都位于结果数组的右半部分，此时结果数组的左半部分最大值即为nums2的左半部分最后一个值
                    max_of_left = nums2[j - 1]
                elif j == 0: # nums2所有部分都位于结果数组的右半部分，此时结果数组的左半部分最大值即为nums1的左半部分最后一个值
                    max_of_left = nums1[i - 1]
                else: # 否则比较nums1的左半部分最后一个值和nums2的左半部分最后一个值
                    max_of_left = max(nums1[i - 1], nums2[j - 1])

                if (m + n) % 2 == 1:
                    return max_of_left

                if i == m: # nums1所有部分都位于结果数组的左半部分，此时结果数组的右半部分最小值即为nums2的右半部分第一个值
                    min_of_right = nums2[j]
                elif j == n: # nums2所有部分都位于结果数组的左半部分，此时结果数组的右半部分最小值即为nums1的右半部分第一个值
                    min_of_right = nums1[i]
                else: # 否则比较nums1的右半部分第一个值和nums2的右半部分第一个值
                    min_of_right = min(nums1[i], nums2[j])

                return (max_of_left + min_of_right) / 2.0
