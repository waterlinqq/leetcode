// 49. Group Anagrams
// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const prime = [
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    41,
    43,
    47,
    53,
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97,
    101,
    103,
  ];
  const map = {};
  for (const str of strs) {
    const key = str
      .split("")
      .reduce((sum, c) => sum * prime[c.charCodeAt(0) - 97], 1);
    if (!map[key]) map[key] = [];
    map[key].push(str);
  }
  return Object.values(map);
};
var groupAnagrams = function (strs) {
  const map = {};
  for (const str of strs) {
    const sortKey = str.split("").sort();
    if (!map[sortKey]) map[sortKey] = [];
    map[sortKey].push(str);
  }
  return Object.values(map);
};
