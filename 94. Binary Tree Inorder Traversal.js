// 94. Binary Tree Inorder Traversal
// Given a binary tree, return the inorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [1,3,2]
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

// 1、不断寻找当前节点的左节点，并将当前节点压入栈中
// 2、到达叶节点后回溯，将根节点存入答案数组中，如果当前节点存在右节点，则进入右节点，重复1
var inorderTraversal = function (root) {
  const res = []
  const stack = []
  let curr = root
  while (curr && stack.length) {
    while (curr) {
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()
    res.push(curr)
    curr = curr.right
  }
  return res
}
var inorderTraversal = function (root, result = []) {
  if (root == null) return []
  inorderTraversal(root.left, result)
  result.push(root.val)
  inorderTraversal(root.right, result)
  return result
};
