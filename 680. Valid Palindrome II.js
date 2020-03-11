// 680. 验证回文字符串 Ⅱ
// 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

// 示例 1:

// 输入: "aba"
// 输出: True
// 示例 2:

// 输入: "abca"
// 输出: True
// 解释: 你可以删除c字符。
// 注意:

// 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。

/**
 * @param {string} s
 * @return {boolean}
 */


var validPalindrome = function(s, chance=true){
  if(s == '') return true
  if(s[0] !== s[s.length -1]){
    if(chance) chance = false
    else return false
    return validPalindrome(s.slice(1),chance) || validPalindrome(s.slice(0,-1), chance)
  }
  return validPalindrome(s.slice(1,-1),chance)
}