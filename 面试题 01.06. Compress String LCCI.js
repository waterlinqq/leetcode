// 面试题 01.06. Compress String LCCI
// Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

// Example 1:

// Input: "aabcccccaaa"
// Output: "a2b1c5a3"
// Example 2:

// Input: "abbccd"
// Output: "abbccd"
// Explanation: 
// The compressed string is "a1b2c2d1", which is longer than the original string.
 

// Note:

// 0 <= S.length <= 50000
/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
  let res = ''
  let char = S[0]
  let count = 1
  for(let i =1; i<=S.length; i++){
    if(S[i] === char) count ++
    else {
      res += `${char}${count}`
      count = 1
      char = S[i]
    }
  }
  return res.length > S.length ? S : res
};