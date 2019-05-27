/*
 * @lc app=leetcode id=72 lang=javascript
 *
 * [72] Edit Distance
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const len1 = word1.length;
    const len2 = word2.length;
    if (len1 == 0 && len2 == 0) {
        return 0;
    } else if (len1 == 0) {
        return len2;
    } else if (len2 == 0) {
        return len1;
    }

    const dp = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1));
    for (let i = 0; i <= len1; i++) {
        for (let j = 0; j <= len2; j++) {
            if (i * j) {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1,
                    dp[i][j - 1] + 1,
                    dp[i - 1][j - 1] + (word1[i - 1] == word2[j - 1] ? 0 : 1));
            } else {
                dp[i][j] = i + j;
            }
        }
    }

    return dp[len1][len2];
};

