// 46. Permutations
// Given a collection of distinct integers, return all possible permutations.

// Example:

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums){
  const len = nums.length
  const tempPath = []
  const result = []
  const backtrack = function(tempPath){
    if(tempPath.length == len) return result.push(tempPath)
    for(let i = 0; i < len; i++){
      if(tempPath.includes(nums[i])) continue
      tempPath.push(nums[i])
      backtrack(tempPath)
      tempPath.pop()
    }
  }
  backtrack(tempPath)
  return result
}

