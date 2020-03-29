// 513. Find Bottom Left Tree Value
// Given a binary tree, find the leftmost value in the last row of the tree.

// Example 1:
// Input:

//     2
//    / \
//   1   3

// Output:
// 1
// Example 2:
// Input:

//         1
//        / \
//       2   3
//      /   / \
//     4   5   6
//        /
//       7

// Output:
// 7
// Note: You may assume the tree (i.e., the given root node) is not NULL.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var findBottomLeftValue = function(root) {
  const queue = [root];
  while (queue.length) {
    root = queue.shift();
    if (root) {
      if (root.right) queue.push(root.right);
      if (root.left) queue.push(root.left);
    }
  }
  return root.val;
};

var findBottomLeftValue = function(root) {
  const levelArr = [];
  const helper = function(root, level) {
    if (root == null) return;
    helper(root.left, level + 1);
    helper(root.right, level + 1);
    if (levelArr.length > level) return;
    levelArr[level] = Math.max(root.val, levelArr[level] || -Infinity);
  };

  helper(root, 0);
  return levelArr[levelArr.length - 1];
};
