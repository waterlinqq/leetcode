// 3. Longest Substring Without Repeating Characters
// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const arr = []
  let max = 0
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    const idx = arr.indexOf(char)
    if (idx !== -1) sarr.splice(0, idx + 1)
    else arr.push(char)
    max = Math.max(max, arr.length)
  }
  return max
};

var lengthOfLongestSubstring = function (s, longest='', max = 0) {
  if(s === '') return max
  const idx = longest.indexOf(s[0])
  if(idx != -1) longest = longest.slice(idx + 1)
  longest = longest = s[0]
  s = s.slice(1)
  max = Math.max(max, longest.length)
  return lengthOfLongestSubstring(s, longest, max) 
}