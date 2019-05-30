/*
 * @lc app=leetcode id=337 lang=javascript
 *
 * [337] House Robber III
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 
 * 树的深度优先遍历，自底向上进行判断，res[0]表示不偷当前层的最大收益，res[1]表示偷窃
 * 当前层的最大收益。自底向上每一层能获得的最大收益只需要通过该层的孩子层和孙子层来进行确定。
 * 思路参考: https://leetcode.com/problems/house-robber-iii/discuss/79330/Step-by-step-tackling-of-the-problem
 * 
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  const res = robSub(root);
  return Math.max(res[0], res[1]);
};

var robSub = function (root) {
  if (root == null) return new Array(2).fill(0);

  const left = robSub(root.left);
  const right = robSub(root.right);
  const res = new Array(2);

  res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
  res[1] = root.val + left[0] + right[0];

  return res;
}

