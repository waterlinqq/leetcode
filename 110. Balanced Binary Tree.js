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
var isBalanced = function(root) {
    var isBalanced1 = function(root, result){
        if(!root) return 0
        const left = isBalanced1(root.left, result)
        const right = isBalanced1(root.right,result)
        if(Math.abs(left - right) > 1) result[0] = false
        return Math.max(left, right) + 1 
    }
    var result = [true]
    isBalanced1(root, result)
    return result[0]
}   


var isBalanced = function(root) {
    var depth = function(root){
        if(!root) return 0
        var left = depth(root.left)
        if(left == -1) return -1
        var right = depth(root.right)
        if(right == -1) return -1
        return Math.abs(left - right) < 2 ? Math.max(left,right) + 1 : -1
 
    }
    return depth(root) != -1
}   



var isBalanced = function(root){
    var depth = function(root){
        return root ? Math.max(depth(root.left), depth(root.right)) + 1: 0
    }
    if (!root) return true
    return Math.abs(depth(root.left) - depth(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right)
}

