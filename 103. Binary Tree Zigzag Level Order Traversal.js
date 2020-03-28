// 103. Binary Tree Zigzag Level Order Traversal
// Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its zigzag level order traversal as:
// [
//   [3],
//   [20,9],
//   [15,7]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var zigzagLevelOrder = function(root) {
  const res = [];
  const dfs = function(i, root) {
    if (root == null) return;
    if (!res[i]) res[i] = [];
    if (i % 2) res[i].unshift(root.val);
    else res[i].push(root.val);
    dfs(i + 1, root.left);
    dfs(i + 1, root.right);
  };
  dfs(0, root);
  return res;
};
var zigzagLevelOrder = function(root) {
  if (root == null) return [];
  const res = [];
  const queue = [root];
  while (queue.length) {
    const levelQueue = queue.splice(0, queue.length);
    const level = [];
    const insertWay = res.length % 2 ? "unshift" : "push";
    while (levelQueue.length) {
      const root = levelQueue.shift();
      level[insertWay](root.val);
      if (root.left) queue.push(root.left);
      if (root.right) queue.push(root.right);
    }
    res.push(level);
  }
  return res;
};
