// 77. Combinations
// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

// Example:

// Input: n = 4, k = 2
// Output:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const result = []
  const subResult = []
  const combineSub = function(start ,subResult){
    if(subResult.length === k) return result.push(subResult.slice())
    for(let i = start;  i<= n; i ++){
      subResult.push(i)
      combineSub(i + 1, subResult)
      subResult.pop(i)
    }
  }
  combineSub(1, subResult)
  return result
};
