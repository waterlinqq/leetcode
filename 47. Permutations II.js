// 47. Permutations II
// Given a collection of numbers that might contain duplicates, return all possible unique permutations.

// Example:

// Input: [1,1,2]
// Output:
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b)
  const len = nums.length
  const result = []
  const tmpPath = []
  const hash = {}
  const backtrack = function (tmpPath) {
    if (tmpPath.length == len) {
      result.push(tmpPath)
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && !hash[i - 1] && nums[i - 1] == nums[i]) continue
      if (hash[i]) continue
      // if  (nums[i] == nums[i +1] && hash[i+1])continue
      hash[i] = true
      tmpPath.push(nums[i])
      backtrack(tmpPath.slice())
      hash[i] = false
      tmpPath.pop()
    }
  }
  backtrack(tmpPath)
  return result
};