// 368. Largest Divisible Subset
// Given a set of distinct positive integers, find the largest subset such that every pair (Si, Sj) of elements in this subset satisfies:

// Si % Sj = 0 or Sj % Si = 0.

// If there are multiple solutions, return any subset is fine.

// Example 1:

// Input: [1,2,3]
// Output: [1,2] (of course, [1,3] will also be ok)
// Example 2:

// Input: [1,2,4,8]
// Output: [1,2,4,8]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  if (nums.length == 0) return [];
  nums.sort((a, b) => a - b);
  const dp = nums.map((num) => [num]);
  let max = dp[0];
  for (let i = 1; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] % nums[j] == 0) {
        if (dp[i].length <= dp[j].length) {
          dp[i] = dp[j].concat(nums[i]);
        }
      }
    }
    if (dp[i].length > max.length) max = dp[i];
  }
  return max;
};
