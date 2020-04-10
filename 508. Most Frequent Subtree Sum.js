// 508. Most Frequent Subtree Sum
// Given the root of a tree, you are asked to find the most frequent subtree sum. The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself). So what is the most frequent subtree sum value? If there is a tie, return all the values with the highest frequency in any order.

// Examples 1
// Input:

//   5
//  /  \
// 2   -3
// return [2, -3, 4], since all the values happen only once, return all of them in any order.
// Examples 2
// Input:

//   5
//  /  \
// 2   -5
// return [2], since 2 happens twice, however -5 only occur once.
// Note: You may assume the sum of values in any subtree is in the range of 32-bit signed integer.
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

var findFrequentTreeSum = function (root) {
  const count = {};
  const result = [];
  const sumTree = (root) => {
    if (root == null) return 0;
    root.val = root.val + sumTree(root.left) + sumTree(root.right);
    return root.val;
  };
  const countShowTimes = (root) => {
    if (root == null) return;
    countShowTimes(root.left);
    countShowTimes(root.right);
    const val = root.val;
    count[val] = (count[val] || 0) + 1;
  };
  const getMostVal = () => {
    const entries = Object.entries(count);

    let max = 0;
    for (const entry of entries) max = Math.max(entry[1], max);
    for (const entry of entries) if (entry[1] == max) result.push(entry[0]);
  };
  sumTree(root);
  countShowTimes(root);
  getMostVal();
  return result;
};
