// 40. Combination Sum II
// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

// Each number in candidates may only be used once in the combination.

// Note:

// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8,
// A solution set is:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]
// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5,
// A solution set is:
// [
//   [1,2,2],
//   [5]
// ]
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b)
  const result = []
  const tmpPath = []
  const backtrack = function (tmpPath, target, start) {
    if (target === 0) {
      result.push(tmpPath)
      return
    }
    for (let i = start; i < candidates.length; i++) {
      const n = candidates[i]
      if (n > target) break
      if (i > start && n === candidates[i - 1]) continue
      tmpPath.push(n)
      backtrack(tmpPath.slice(), target - n, i + 1)
      tmpPath.pop()
    }
  }
  backtrack(tmpPath, target, 0)
  return result
};