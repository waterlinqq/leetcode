// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 你可以假设数组中无重复元素。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// #二分查找
var searchInsert = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  if (target > nums[right]) return right + 1
  while (left < right) {
    let index = Math.floor((left + right) / 2)
    if (target < nums[index]) {
      right = index
    } else if (target > nums[index]) {
      left = index + 1
    } else {
      return index
    }
  }
  return left
}

