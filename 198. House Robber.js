// 198. House Robber
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

// Example 1:

// Input: [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//              Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
//              Total amount you can rob = 2 + 9 + 1 = 12.
/**
 * @param {number[]} nums
 * @return {number}
 */


var rob = function (nums) {
  const helper = function (nums) {
    if (nums.length == 0) return [0, 0]
    const result = helper(nums.slice(0, nums.length - 1))
    const temp = result[0]
    result[0] = Math.max(result[0], result[1])
    result[1] = temp + nums.pop()
    return result
  }
  return Math.max(...helper(nums))
}

var rob = function (nums) {
  if (nums.length == 0) return 0
  let prev = 0
  let curr = 0
  for (const n of nums) {
    let temp = prev
    prev = curr
    curr = Math.max(curr, temp + n)
  }
  return curr
}


var rob = function (nums) {
  const len = nums.length
  if (len == 0) return 0
  const dp = []
  dp[0] = 0
  dp[1] = nums[0]
  for (let i = 2; i <= len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
  }
  return dp[len]
}

var rob = function (nums) {
  let steal = 0
  let skip = 0
  for (let i = 0; i < nums.length; i++) {
    let temp = steal
    steal = skip + nums[i]
    skip = Math.max(temp, skip)
  }
  return Math.max(steal, skip)
};

var rob = function (nums) {
  if (nums.length == 0) return 0
  const length = nums.length
  const dp = Array.from({ length }, () => [])
  dp[0][0] = 0
  dp[0][1] = nums[0]
  for (let i = 1; i < length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1])
    dp[i][1] = dp[i - 1][0] + nums[i]
  }
  return Math.max(dp[length - 1][0], dp[length - 1][1])
};