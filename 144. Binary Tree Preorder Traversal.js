// 144. Binary Tree Preorder Traversal
// Given a binary tree, return the preorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [1,2,3]
// Follow up: Recursive solution is trivial, could you do it iteratively?

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const stack = [root];
  const result = [];
  while (stack.length) {
    const root = stack.pop();
    if (!root) continue;
    result.push(root.val);
    stack.push(root.right);
    stack.push(root.left);
  }
  return result;
};

var preorderTraversal = function(root) {
  return root
    ? [
        root.val,
        ...preorderTraversal(root.left),
        ...preorderTraversal(root.right)
      ]
    : [];
};

var preorderTraversal = function(root, result = []) {
  if (root == null) return result;
  result.push(root.val);
  preorderTraversal(root.left, result);
  preorderTraversal(root.right, result);
  return result;
};
