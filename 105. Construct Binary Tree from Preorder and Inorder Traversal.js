// 105. Construct Binary Tree from Preorder and Inorder Traversal
// Given preorder and inorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  // preorder mlr
  // inorder lmr
  if (preorder.length == 0) return null;
  if (inorder.length == 0) return null;
  const rootVal = preorder[0];
  const rootIdx = inorder.indexOf(rootVal);
  const root = new TreeNode(rootVal);
  root.left = buildTree(
    preorder.slice(1, rootIdx + 1),
    inorder.slice(0, rootIdx + 1)
  );
  root.right = buildTree(
    preorder.slice(rootIdx + 1),
    inorder.slice(rootIdx + 1)
  );
  return root;
};
