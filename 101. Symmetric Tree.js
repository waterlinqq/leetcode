// 101. Symmetric Tree
// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3


// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3


// Note:
// Bonus points if you could solve it both recursively and iteratively.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true
  const isMirror = function (r1, r2) {
    if (!r1 && !r2) return true
    if (!r1 || !r2) return false
    return r1.val == r2.val
      && isMirror(r1.left, r2.right)
      && isMirror(r1.right, r2.left)
  }
  return isMirror(root.left, root.right)
};

var isSymmetric = function (root) {
  if (!root) return true
  const queue = [root.left, root.right]
  while (queue.length) {
    const left = queue.shift()
    const right = queue.shift()
    if (!left && !right) continue
    if (!left || !right) return false
    if (left.val != right.val) return false
    queue.push(left.left)
    queue.push(right.right)
    queue.push(left.right)
    queue.push(right.left)
  }
  return true
}

