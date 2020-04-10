// 219. Contains Duplicate II
// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const arr = [];
  for (const num of nums) {
    if (arr.includes(num)) return true;
    arr.push(num);
    if (arr.length > k) {
      arr.shift();
    }
  }
  return false;
};

var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!map.has(num)) {
      map.set(num, i);
    } else if (i - map.get(num) > k) {
      map.set(num, i);
    } else {
      return true;
    }
  }
  return false;
};
