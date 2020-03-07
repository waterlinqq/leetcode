// 14. 最长公共前缀
// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:

// 所有输入只包含小写字母 a-z 。

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs, i = 0, re=''){
  if(strs.length == 0) return re
  if(strs.length == 1) return strs[0]
  const char = strs[0][i]
  if(char == null) return re
  return strs.every(str => str[i] == char ) 
  ? longestCommonPrefix(strs, i+1, re + char)
  : re
}


var longestCommonPrefix = function(strs) {
  if (strs.length == 0) return ''
  let res = ''
  let i = 0
  outer: while(true){
    let s = strs[0][i]
    if(s == null) break
    for(let j = 1; j<strs.length; j++){
      if(strs[j][i] == null) break outer
      if(strs[j][i] !== s) break outer
    }
    res += s
    i ++
  }
  return res
};