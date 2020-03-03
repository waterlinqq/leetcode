// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

// 示例 1:

// 输入: [1,2,3,4,5,6,7] 和 k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右旋转 1 步: [7,1,2,3,4,5,6]
// 向右旋转 2 步: [6,7,1,2,3,4,5]
// 向右旋转 3 步: [5,6,7,1,2,3,4]
// 示例 2:

// 输入: [-1,-100,3,99] 和 k = 2
// 输出: [3,99,-1,-100]
// 解释: 
// 向右旋转 1 步: [99,-1,-100,3]
// 向右旋转 2 步: [3,99,-1,-100]
// 说明:

// 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
// 要求使用空间复杂度为 O(1) 的 原地 算法。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const arr = nums.splice(nums.length - k, k)
    nums.unshift(...arr)
};

var rotate = function (nums, k) {
    while (k--) nums.unshift(nums.pop())
}

// #暴力
// time O(n*k)
// space O(1)
var rotate = function (nums, k) {
    for (var i = 0; i < k; i++) {
        var previous = nums[nums.length - 1]
        for (var j = 0; j < nums.length; j) {
            var temp = nums[j]
            nums[j] = previous
            previous = temp
        }
    }
}

// time O(n)
// space O(n)
// #辅助数组
var rotate = function (nums, k) {
    var len = nums.length
    var tempArr = Array(len + k)
    var i = 0
    for (; i < len; i++) {
        tempArr[(i + k) % len] = nums[i]
    }
    i = 0
    for (; i < len; i++) {
        nums[i] = tempArr[i]
    }
}


// time O(n)
// space O(1)
// #三重翻转
var rotate = function (nums, k) {
    var reverse = function (arr, start, end) {
        while (start < end) {
            var temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
            start += 1 
            end -= 1
        }
    }
    reverse(nums,0,nums.length -1)
    reverse(nums, 0 ,k)
    reverse(nums,k, nums.length - 1)

}

// #环形旋转