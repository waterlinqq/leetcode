// 114. Flatten Binary Tree to Linked List
// Given a binary tree, flatten it to a linked list in-place.

// For example, given the following tree:

//     1
//    / \
//   2   5
//  / \   \
// 3   4   6
// The flattened tree should look like:

// 1
//  \
//   2
//    \
//     3
//      \
//       4
//        \
//         5
//          \
//           6

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

var flatten = function(root) {
  let prev = null;
  const postTravese = root => {
    if (root == null) return;
    postTravese(root.right);
    postTravese(root.left);
    root.right = prev;
    root.left = null;
    prev = root;
  };
  postTravese(root);
};

var flatten = function(root) {
  const preorder = [];
  const preTraverse = root => {
    if (root == null) return;
    preorder.push(root);
    preTraverse(root.left);
    preTraverse(root.right);
  };
  preTraverse(root);
  for (let i = 0; i < preorder.length; i++) {
    const root = preorder[i];
    root.left = null;
    root.right = preorder[i + 1];
  }
};

var flatten = function(root) {
  if (root == null) return null;
  const left = flatten(root.left);
  const right = flatten(root.right);
  root.right = left;
  let curr = root;
  while (curr.right) curr = curr.right;
  curr.right = right;
  root.left = null;
  return root;
};
