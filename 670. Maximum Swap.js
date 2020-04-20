// 670. Maximum Swap
// Given a non-negative integer, you could swap two digits at most once to get the maximum valued number. Return the maximum valued number you could get.

// Example 1:
// Input: 2736
// Output: 7236
// Explanation: Swap the number 2 and the number 7.
// Example 2:
// Input: 9973
// Output: 9973
// Explanation: No swap.
// Note:
// The given number is in the range [0, 108]

/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  const nums = [...num.toString(10)];
  const sort = nums.slice().sort((a, b) => b - a);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == sort[i]) continue;
    const idx = nums.lastIndexOf(sort[i]);
    [nums[i], nums[idx]] = [nums[idx], nums[i]];
    return parseInt(nums.join(""), 10);
  }
  return num;
};
