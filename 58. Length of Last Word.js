// 58. 最后一个单词的长度
// 给定一个仅包含大小写字母和空格 ' ' 的字符串 s，返回其最后一个单词的长度。如果字符串从左向右滚动显示，那么最后一个单词就是最后出现的单词。

// 如果不存在最后一个单词，请返回 0 。

// 说明：一个单词是指仅由字母组成、不包含任何空格字符的 最大子字符串。



// 示例:

// 输入: "Hello World"
// 输出: 5
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let res = 0
  s = ' ' + s.trimEnd()
  if (s == '') return res
  while (s[s.length - res - 1] !== ' ') res += 1
  return res
};


// 從字串末尾逐字向前檢查
// 情況1: 該字是空串且累積長度為0
// 有可能該字末尾為空串
// 此時不計入長度累積結果 但往前繼續檢查
// 情況2: 該字是空串或空值(且已有累積長度)
// 表示單詞結束
// 此時直接返回累積長度結果
// 情況3: (該字非空串也非空值)
// 計入長度累積結果 並且往前繼續檢查

var lengthOfLastWord = function (s, i = 1, res = 0) {
  const char = s[s.length - i]
  if(char == ' ' && res == 0) i += 1
  else if(char == ' ' || char == null) return res
  else res += 1, i += 1
  return lengthOfLastWord(s, i, res)
};