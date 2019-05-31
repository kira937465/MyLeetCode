/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */
/**
 * 利用动态规划求解，解法中按照从左至右，从上至下的顺序遍历，每一阶段的结果值只会由该阶段终点
 * 的左方和上方的领接点决定(因为机器人只能向右和向下移动)，并且后续阶段不会影响之前所有
 * 阶段的结果值。
 * 
 * dp方程: dp[i][j] = dp[i][j - 1] + dp[i - 1][j] (解法中i表示行，j表示列)
 * 如果当前位置有障碍需要设置 dp[i][j] = 0
 * 
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const row = obstacleGrid.length;
  const col = obstacleGrid[0].length;

  const dp = new Array(row).fill(0).map(() => new Array(col).fill(0));
  dp[0][0] = 1; // 起点初始化为结果值为1，方便迭代中逻辑的统一性
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (obstacleGrid[i][j] == 1) {
        dp[i][j] = 0;

        continue;
      }

      if (j > 0) {
        dp[i][j] += dp[i][j - 1];
      }
      if (i > 0) {
        dp[i][j] += dp[i - 1][j];
      }
    }
  }

  return dp[row - 1][col - 1];
};

