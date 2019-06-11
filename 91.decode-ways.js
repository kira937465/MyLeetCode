/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */
/**
 * 如果字符串如果出现类似"...30..."或者"...00..."这样大于"26"的子串，或者"0..."
 * 这种前缀时都是无法解码的，所以尝试后发现字符串从后往前遍历更方便。
 * 字符串后端子结构的解不会受前方字符的影响，可以使用动态规划求解。
 * 
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let prevDigit = 0;
  let curDigit = 0;
  let result = 0, next1 = 1, next2 = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    curDigit = s[i] - '0';
    if (curDigit == 0) {
      result = 0;
    } else {
      result = next1 + (curDigit * 10 + prevDigit < 27 ? next2 : 0);
    }

    next2 = next1;
    next1 = result;
    prevDigit = curDigit;
  }

  return result;
};

