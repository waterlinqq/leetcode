// 面试题40. 最小的k个数
// 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

 

// 示例 1：

// 输入：arr = [3,2,1], k = 2
// 输出：[1,2] 或者 [2,1]
// 示例 2：

// 输入：arr = [0,1,2,1], k = 1
// 输出：[0]
 

// 限制：

// 0 <= k <= arr.length <= 10000
// 0 <= arr[i] <= 10000

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  const quickSort = function(arr){
    if(arr.length <= 1) return arr
    const left = []
    const right = []
    const mid = Math.floor(arr.length / 2)
    const [pivot] = arr[mid]
    for(let i =0 ; i< arr.length; i++){
      if(i == mid) continue
      if(arr[i] < pivot) left.push(arr[i])
      else  right.push(arr[i])
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
  }
  return quickSort(arr).slice(0,k)
};
var getLeastNumbers = function(arr, k) {
  arr.sort((a,b) => a -b)
  return arr.slice(0,k)
};