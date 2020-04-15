// 645. Set Mismatch
// The set S originally contains numbers from 1 to n. But unfortunately, due to the data error, one of the numbers in the set got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// Given an array nums representing the data status of this set after the error. Your task is to firstly find the number occurs twice and then find the number that is missing. Return them in the form of an array.

// Example 1:
// Input: nums = [1,2,2,4]
// Output: [2,3]
// Note:
// The given array size will in the range [2, 10000].
// The given array's numbers won't have any order.
/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findErrorNums = function (nums) {
  const len = nums.length;
  const res = [];
  let sum = 0;
  for (let i = 0; i < len; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) res[0] = index + 1;
    else {
      nums[index] *= -1;
      sum += Math.abs(nums[i]);
    }
  }
  res[1] = ((len + 1) * len) / 2 - sum;
  return res;
};
var findErrorNums = function (nums) {
  const res = [];
  const arr = Array(nums.length + 1);
  for (const num of nums) {
    if (arr[num] == true) res[0] = num;
    arr[num] = true;
  }
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] == null) {
      res[1] = i;
      break;
    }
  }
  return res;
};
