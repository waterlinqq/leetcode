// 257. Binary Tree Paths
// Given a binary tree, return all root-to-leaf paths.

// Note: A leaf is a node with no children.

// Example:

// Input:

//    1
//  /   \
// 2     3
//  \
//   5

// Output: ["1->2->5", "1->3"]

// Explanation: All root-to-leaf paths are: 1->2->5, 1->3
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */

var binaryTreePaths = function (root) {
  const result = []
  const tmpPath = []
  const track = function (tmpPath, root) {
    if (root == null) return
    tmpPath.push(root.val)
    if (!root.left && !root.right) {
      result.push(tmpPath.join('->'))
      return
    }
    track(tmpPath.slice(), root.left)
    track(tmpPath.slice(), root.right)
  }
  track(tmpPath, root)
  return result
};