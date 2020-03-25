// 53. Maximum Subarray
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

  if (nums.length == 0) return 0
  const dp = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
  }
  return Math.max(...dp)
};

var maxSubArray = function (nums) {
  if (nums.length == 0) return 0
  let sum = nums[0]
  let res = sum
  for (let i = 1; i < nums.length; i++) {
    //寫法1
    sum = Math.max(nums[i], sum + nums[i])
    // 寫法2
    //   if(sum > 0) {
    //     sum += num;
    // } else {
    //     sum = num;
    // }
    //  寫法3
    // if(sum + nums[i] > nums[i])
    res = Math.max(res, sum)
  }
  return res
}
