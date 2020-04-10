// 349. Intersection of Two Arrays
// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Note:

// Each element in the result must be unique.
// The result can be in any order.
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  const set = new Set();
  for (let i = 0, j = 0; i < nums1.length && j < nums2.length; ) {
    if (nums1[i] > nums2[j]) j++;
    else if (nums1[i] < nums2[j]) i++;
    else set.add(nums1[i]), i++, j++;
  }
  return [...set];
};

var intersection = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  return [...set1].filter((n) => set2.has(n));
};

var intersection = function (num1, num2) {
  const temp = {};
  return nums1.filter((num) => {
    if (temp[num]) return;
    temp[num] = true;
    return nums2.includes(num);
  });
};
