// 169. Majority Element
// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3
// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2
/**
 * @param {number[]} nums
 * @return {number}
 */

 // #摩爾投票法
var majorityElement = function (nums) {
  let count = 1
  for (let i = 1; i < nums.length; i++) {
    if(nums[0] == nums[i]) count += 1
    else if(count == 1) nums[0] = nums[i]
    else count -= 1
  }
  return nums[0]
}
// 多數元素超過一半
// 因此排序後的的中間數必定是多數元素
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b)
  return nums[nums.length >> 1]
}

var majorityElement = function (nums) {
  const count = {}
  const len = nums.length
  const halfLen = Math.ceil(len / 2)
  for (let i = 0; i < len; i++) {
    const number = nums[i]
    count[number] = (count[number] || 0) + 1
    if (count[number] > halfLen) return number
  }
};

