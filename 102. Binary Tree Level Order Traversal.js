// 102. Binary Tree Level Order Traversal
// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
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
var levelOrder = function (root) {
  if (root == null) return []
  const res = []
  const queue = [root]
  let level = 0
  while (queue.length) {
    res[level] = []
    let levelLength = queue.length
    while (levelLength--) {
      const root = queue.shift()
      res[level].push(root.val)
      if (root.left) queue.push(root.left)
      if (root.right) queue.push(root.right)
    }
    level++
  }
  return res
};
