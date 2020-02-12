/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return null
    var left = invertTree(root.left)
    var right = invertTree(root.right)
    root.left = right
    root.right = left
    return root
};


var invertTree = function(root) {
    var queue = []
    queue.push(root)
    while(queue.length){
        var node = queue.shift()
        if(node == null) continue
        queue.push(node.left, node.right)
        var temp = node.left
        node.left = node.right
        node.right = temp
    }
    return root
};