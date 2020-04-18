// 581. Shortest Unsorted Continuous Subarray
// Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

// You need to find the shortest such subarray and output its length.

// Example 1:
// Input: [2, 6, 4, 8, 10, 9, 15]
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
// Note:
// Then length of the input array is in range [1, 10,000].
// The input array may contain duplicates, so ascending order here means <=.
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let right = 0;
  let left = nums.length - 1;
  let maxIdx = right;
  let minIdx = left;
  for (let i = right + 1; i < nums.length; i++) {
    if (nums[i] < nums[maxIdx]) {
      right = i;
    } else {
      maxIdx = i;
    }
  }
  for (let i = left - 1; i >= 0; i--) {
    if (nums[i] > nums[minIdx]) {
      left = i;
    } else {
      minIdx = i;
    }
  }
  if (left >= right) return 0;
  return right - left + 1;
};
