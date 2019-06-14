/*
 * @lc app=leetcode id=639 lang=javascript
 *
 * [639] Decode Ways II
 */
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s[0] == '0') {
    return 0;
  }

  const dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = s[0] == '*' ? 9 : 1;

  let cur = "";
  let pre = "";
  const count = s.length;
  for (let i = 2; i <= count; i++) {
    cur = s[i - 1];
    pre = s[i - 2];

    // For dp[i - 1]
    if (cur == '*') {
      dp[i] += 9 * dp[i - 1];
    } else if (cur > '0') {
      dp[i] += dp[i - 1];
    }

    // For dp[i - 2]
    if (pre == '*') {
      if (cur == '*') {
        dp[i] += 15 * dp[i - 2];
      } else if (cur > '6') {
        dp[i] += dp[i - 2];
      } else {
        dp[i] += 2 * dp[i - 2];
      }
    } else if (pre == "1" || pre == "2") {
      if (cur == '*') {
        if (pre == "1") {
          dp[i] += 9 * dp[i - 2];
        } else {
          dp[i] += 6 * dp[i - 2];
        }
      } else if (Number(pre + cur) <= 26) {
        dp[i] += dp[i - 2];
      }
    }

    dp[i] %= 1000000007;
  }

  return dp[count];
};

