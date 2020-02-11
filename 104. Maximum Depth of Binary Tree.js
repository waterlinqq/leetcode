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
var maxDepth = function(root) {
    if(!root) return 0
    const left = maxDepth(root.left)
    const right = maxDepth(root.right)
    const max = Math.max(left,right)
    return max + 1
};