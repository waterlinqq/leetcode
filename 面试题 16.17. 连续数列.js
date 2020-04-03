// 面试题 16.17. 连续数列
// 给定一个整数数组（有正数有负数），找出总和最大的连续数列，并返回总和。

// 示例：

// 输入： [-2,1,-3,4,-1,2,1,-5,4]
// 输出： 6
// 解释： 连续子数组 [4,-1,2,1] 的和最大，为 6。
// 进阶：

// 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const dp = [];
  dp[-1] = 0;
  for (let i = 0; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]); // 要嘛是捨棄 要嘛是保留之前總和
  }
  return Math.max(...dp);
};

var maxSubArray = function(nums) {
  const dp = [];
  let max = -Infinity;
  dp[-1] = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
    max = Math.max(max, dp[i]);
  }
  return max;
};
