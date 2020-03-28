// 1. Two Sum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let i = 0,
    j = nums.length - 1;
  while (nums.length) {
    const num = nums.pop();
    if ((i = nums.indexOf(target - num)) != -1) return [i, j];
    j -= 1;
  }
};

var twoSum = function(nums, target) {
  const map = nums.reduce((map, n, i) => ((map[n] = i), map), {});
  for (const i in nums) {
    const num = nums[i];
    const res = target - num;
    const j = map[res];
    if (j == null) continue;
    if (j == i) continue;
    return [i, j];
  }
};
