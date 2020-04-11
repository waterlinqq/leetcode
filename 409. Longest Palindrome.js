// 409. Longest Palindrome
// Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

// This is case sensitive, for example "Aa" is not considered a palindrome here.

// Note:
// Assume the length of given string will not exceed 1,010.

// Example:

// Input:
// "abccccdd"

// Output:
// 7

// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

/**
 * @param {string} s
 * @return {number}
 */

var longestPalindrome = function (s) {
  const arr = Array(123).fill(0); // z.charCodeAt(0) 122
  let odd = 0;
  for (const i in s) arr[s.charCodeAt(i)] += 1;
  for (const n of arr) odd += n % 2;
  return odd ? s.length - odd + 1 : s.length;
};

var longestPalindrome = function (s) {
  const map = new Map();
  let res = 0;
  for (const c of s) {
    map.set(c, (map.get(c) || 0) + 1);
  }
  for (const [c, n] of map) {
    if (n % 2 == 0) (res += n), map.delete(c);
    else res += n - 1;
  }
  if (map.size) res += 1;
  return res;
};
