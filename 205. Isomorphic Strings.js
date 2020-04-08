// 205. Isomorphic Strings
// Given two strings s and t, determine if they are isomorphic.

// Two strings are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
// Note:
// You may assume both s and t have the same length.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const map = new Map();
  const set = new Set();
  for (let i = 0; i < s.length; i++) {
    const S = s[i];
    const T = t[i];
    if (!map.has(S)) {
      if (set.has(T)) return false;
      map.set(S, T);
      set.add(T);
    } else if (map.get(S) !== T) return false;
  }
  return true;
};
