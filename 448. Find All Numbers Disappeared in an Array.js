// 448. Find All Numbers Disappeared in an Array
// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements of [1, n] inclusive that do not appear in this array.

// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// Example:

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [5,6]
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const res = [];
  for (const num of nums) {
    const idx = Math.abs(num) - 1;
    if (nums[idx] > 0) nums[idx] *= -1;
  }
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] > 0) res.push(i);
  }
  return res;
};
