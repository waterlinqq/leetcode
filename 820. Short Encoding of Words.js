// 820. Short Encoding of Words
// Given a list of words, we may encode it by writing a reference string S and a list of indexes A.

// For example, if the list of words is ["time", "me", "bell"], we can write it as S = "time#bell#" and indexes = [0, 2, 5].

// Then for each index, we will recover the word by reading from the reference string from that index until we reach a "#" character.

// What is the length of the shortest reference string S possible that encodes the given words?

// Example:

// Input: words = ["time", "me", "bell"]
// Output: 10
// Explanation: S = "time#bell#" and indexes = [0, 2, 5].

// Note:

// 1 <= words.length <= 2000.
// 1 <= words[i].length <= 7.
// Each word has only lowercase letters.

/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  const set = new Set(words);
  for (const item of set) {
    for (let i = 1; i < item.length; i++) {
      const target = item.slice(i);
      set.has(target) && set.delete(target);
    }
  }
  let result = 0;
  set.forEach(item => (result += item.length + 1));
  return result;
};

var minimumLengthEncoding = function(words) {
  let result = 0;
  words = words.map(word => [...word].reverse().join(""));
  words = words.sort((a, b) => (a > b ? 1 : -1));
  for (let i = 1; i < words.length; i++) {
    if (words[i].includes(words[i - 1])) continue;
    else result += words[i - 1].length + 1;
  }
  result += words[words.length - 1].length + 1;
  return result;
};
