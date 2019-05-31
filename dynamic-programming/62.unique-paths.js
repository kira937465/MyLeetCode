/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */
/**
 * 利用动态规划求解，解法中按照从左至右，从上至下的顺序遍历，每一阶段的结果值只会由该阶段终点
 * 的左方和上方的领接点决定(因为机器人只能向右和向下移动)，并且后续阶段不会影响之前所有
 * 阶段的结果值。
 * 
 * dp方程: dp[i][j] = dp[i][j - 1] + dp[i - 1][j] (解法中i表示行，j表示列)
 * 
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = new Array(m).fill(0);
  dp[0] = 1; // 每一行的第一列的结果值可以观察到确定只会为1
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[j] = dp[j - 1] + dp[j];
    }
  }

  return dp[m - 1];
};

