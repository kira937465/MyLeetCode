/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const lenS = s.length;
    const lenP = p.length;

    const dp = new Array(lenS + 1).fill(0).map(() => new Array(lenP + 1).fill(false));
    dp[0][0] = true;
    for (let i = 0; i <= lenP; i++) {
        if (i > 1 && p[i - 1] == "*") {
            dp[0][i] = dp[0][i - 2];
        }
    }

    for (let i = 1; i <= lenS; i++) {
        for (let j = 1; j <= lenP; j++) {
            if (s[i - 1] == p[j - 1] || p[j - 1] == ".") {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] == "*") {
                if (p[j - 2] == s[i - 1] || p[j - 2] == ".") {
                    dp[i][j] |= dp[i][j - 1];
                    dp[i][j] |= dp[i][j - 2];
                    dp[i][j] |= dp[i - 1][j];
                } else {
                    dp[i][j] = dp[i][j - 2];
                }
            }
        }
    }

    return dp[lenS][lenP];
};

