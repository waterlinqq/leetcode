// 面试题 17.16. The Masseuse LCCI
// A popular masseuse receives a sequence of back-to-back appointment requests and is debating which ones to accept. She needs a break between appointments and therefore she cannot accept any adjacent requests. Given a sequence of back-to-back appoint­ ment requests, find the optimal (highest total booked minutes) set the masseuse can honor. Return the number of minutes.

// Note: This problem is slightly different from the original one in the book.



// Example 1:

// Input:  [1,2,3,1]
// Output:  4
// Explanation:  Accept request 1 and 3, total minutes = 1 + 3 = 4
// Example 2:

// Input:  [2,7,9,3,1]
// Output:  12
// Explanation:  Accept request 1, 3 and 5, total minutes = 2 + 9 + 1 = 12
// Example 3:

// Input:  [2,1,4,5,3,1,1,3]
// Output:  12
// Explanation:  Accept request 1, 3, 5 and 8, total minutes = 2 + 4 + 3 + 3 = 12

/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function (nums) {
  let work = 0
  let rest = 0
  for (let i = 0; i < nums.length; i++) {
    [work, rest] = [rest + nums[i], Math.max(work, rest)]
  }
  return Math.max(work, rest)
};


var massage = function (nums) {
  if (nums.length == 0) return 0
  if (nums.length == 1) return nums[0]
  const dp = Array.from({ length: nums.length }).map(() => [])
  dp[0][0] = 0
  dp[0][1] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1])
    dp[i][1] = dp[i - 1][0] + nums[i]
  }
  return Math.max(dp[nums.length - 1][1], dp[nums.length - 1][0])
};