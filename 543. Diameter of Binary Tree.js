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
var diameterOfBinaryTree = function(root) {
    var longest = 0
    var getLongest = function(root){
        if(!root) return 0 
        var left = getLongest(root.left)
        var right = getLongest(root.right)
        longest = Math.max(left + right ,longest)
        return Math.max(left,right) + 1
    }
    getLongest(root)
    return longest
};