// 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。

// 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

// 说明:

// 返回的下标值（index1 和 index2）不是从零开始的。
// 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
// 示例:

// 输入: numbers = [2, 7, 11, 15], target = 9
// 输出: [1,2]
// 解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

//#雙指針
var twoSum = function(numbers, target) {
  let len=numbers.length
  if(len<2) return []
  let left=0;
  let right=len-1
  while(left<right){
      if(numbers[left]+numbers[right]===target){
          return [left+1,right+1]
      }
      else if(numbers[left]+numbers[right]<target){
          left++
      }else{
          right--
      }
     
  }
  return []
};


//#二分查找
var twoSum=function(numbers,target){
  for(let i=0;i<numbers.length;i++){
      let other=target-numbers[i]
      let res=binarySearch(numbers,other)
      if(res!=-1&&i!=res){
          return i<res?[i+1,res+1]:[res+1,i+1]
      }
  }
  return []
}
const binarySearch = function(numbers, target) {
  let high=numbers.length
  let low=0
  while(low<=high){
      let mid=parseInt((low+high)/2)
      if(numbers[mid]===target){
         return mid
      }else if(numbers[mid]<target){
          low=mid+1
      }else{
          high=mid-1
      }
  }
  return -1
};

//#二分查找
var twoSum = function(numbers, target){
  let len = numbers.len
  for(var i = 0; i <len ; i++){
    let l = i + 1 // 注意 + 1
    let r = len - 1
    while(l <= r){ // 注意 =
      let m = Math.floor((l + r) /2)
      if(numbers[i] + numbers[m] == target){
        return [i +1, m+1]
      }else if(numbers[i] + numbers[m] > target){
        r = m - 1
      }else if(numbers[i] + numbers[m] < target){
        l = m + 1
      }
    }
  }
}
