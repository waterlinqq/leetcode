// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Note: The algorithm should run in linear time and in O(1) space.

// Example 1:

// Input: [3,2,3]
// Output: [3]
// Example 2:

// Input: [1,1,1,3,3,2,2,2]
// Output: [1,2]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/majority-element-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @return {number[]}
 */


// ＃摩爾投票
// 因為答案的元素 數量必須超過 1/3 所以答案最多只會有兩個
// 只要先得到這兩個數 再去驗證是否超過 1/3
// 目的要得出最有可能的兩位候選人 並非正確
// 如何找出兩位最高票 假如有n個候選人 讓這n個候選人都互相抵銷各自一票 剩下最高票是最可能當選的
// 先假定兩位可能者
// 其中可能者票就計+1
// 當有一位是0票時 暫時被淘汰(不扣票 換可能者)
// 都沒票時各自都抵銷(兩位可能者是必定要抵銷 其他人就不管)

var majorityElement = function (nums) {
  if (nums.length == 0) return []
  let cand1 = nums[0]
  let cand2 = nums[0]
  let count1 = 0
  let count2 = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == cand1) count1++
    else if (nums[i] == cand2) count2++
    else if (count1 == 0) cand1 = nums[i], count1 = 1
    else if (count2 == 0) cand2 = nums[i], count2 = 1
    else count1--, count2--
  }
  count1 = 0 
  count2 = 0
  for(let i =0; i <nums.length; i++){
    if(nums[i] == cand1) count1 ++
    else if (nums[i] == cand2) count2++
  }
  const result = []
  const threshold = Math.floor(nums.length / 3)
  if(count1 > threshold) result.push(cand1)
  if(count2 > threshold) result.push(cand2)
  return result
}


// 排序
var majorityElement = function (nums) {
  if (nums.length == 0) return []
  const result = []
  const times = nums.length / 3
  nums.sort((a, b) => a - b)
  let count = 1
  for (let i = 1; i <= nums.length; i++) {
    if (nums[0] == nums[i]) {
      count += 1
    } else {
      if (count > times) result.push(nums[0])
      nums[0] = nums[i]
      count = 1
    }
  }
  return result
};

