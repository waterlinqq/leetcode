/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var identical = function(s, t){
    if(!s && !t) return true
    if(!s || !t) return false
    if(s.val != t.val) return false
    return identical(s.left, t.left) && identical(s.right, t.right)
}
var isSubtree = function(s, t) {
    if(!s || !t) return false
    if(identical(s,t)) return true
    return isSubtree(s.left, t) || isSubtree(s.right, t) 
};
