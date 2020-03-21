// 78. Subsets
// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  nums = [...new Set(nums)]
  const result = [[]]
  for (let i = 0; i < nums.length; i++) {
    const resultLen = result.length
    for (let j = 0; j < resultLen; j++) {
      result.push(result[j].concat(nums[i]))
    }
  }
  return result
};

var subsets = function (nums) {
  const res = []
  const tempPath = []
  const backtrack = function (tempPath, start) {
    res.push(tempPath)
    for (let i = start; i < nums.length; i++) {
      tempPath.push(nums[i])
      backtrack(tempPath.slice(), i + 1)
      tempPath.pop()
    }
  }
  backtrack(tempPath, 0)
  return res
}

