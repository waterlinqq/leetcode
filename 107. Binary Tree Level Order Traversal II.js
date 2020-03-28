// 107. Binary Tree Level Order Traversal II
// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its bottom-up level order traversal as:
// [
//   [15,7],
//   [9,20],
//   [3]
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
var levelOrderBottom = function(root) {
  const result = [];
  const helper = function(i, root) {
    if (root == null) return;
    if (!result[i]) result[i] = [];
    result[i].push(root.val);
    helper(i + 1, root.left);
    helper(i + 1, root.right);
  };
  helper(0, root);
  result.reverse();
  return result;
};

var levelOrderBottom = function(root) {
  if (root == null) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    let levelCnt = queue.length;
    const level = [];
    while (levelCnt--) {
      const root = queue.shift();
      level.push(root.val);
      if (root.left) queue.push(root.left);
      if (root.right) queue.push(root.right);
    }
    result.unshift(level);
  }
  return result;
};
