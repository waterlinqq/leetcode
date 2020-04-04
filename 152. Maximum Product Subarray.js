// 152. Maximum Product Subarray
// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

// Example 1:

// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function (nums) {
  if (nums.length == 0) return 0;
  let [max, cmax, cmin] = [nums[0], nums[0], nums[0]];
  for (let i = 1; i < nums.length; i++) {
    [cmax, cmin] = [cmax * nums[i], cmin * nums[i]];
    [cmax, cmin] = [
      Math.max(cmax, cmin, nums[i]),
      Math.min(cmax, cmin, nums[i]),
    ];
    max = Math.max(max, cmax);
  }
  return max;
};

var maxProduct = function (nums) {
  const length = nums.length;
  if (length == 0) return 0;
  const dp = Array.from({ length }, () => []);
  let max = (dp[0][1] = dp[0][0] = nums[0]);
  for (let i = 1; i < length; i++) {
    if (nums[i] >= 0) {
      dp[i][0] = Math.max(dp[i - 1][0] * nums[i], nums[i]);
      dp[i][1] = Math.min(dp[i - 1][1] * nums[i], nums[i]);
    } else {
      dp[i][0] = Math.max(dp[i - 1][1] * nums[i], nums[i]);
      dp[i][1] = Math.min(dp[i - 1][0] * nums[i], nums[i]);
    }
    max = Math.max(max, dp[i][0]);
  }
  return max;
};
