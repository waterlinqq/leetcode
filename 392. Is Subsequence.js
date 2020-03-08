// 392. 判断子序列
// 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

// 你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度 ~= 500,000），而 s 是个短字符串（长度 <=100）。

// 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

// 示例 1:
// s = "abc", t = "ahbgdc"

// 返回 true.

// 示例 2:
// s = "axc", t = "ahbgdc"

// 返回 false.

// 后续挑战 :

// 如果有大量输入的 S，称作S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 // #貪心
var isSubsequence = function(s, t){
  for(let i = 0; i < s.length; i++){
    const j = t.indexOf(s[i])
    if(j == -1)return false
    t = t.substr(j + 1)
  }
  return true
}
// #貪心的遞歸
var isSubsequence = function(s, t){
  if(s == '') return true
  const i = t.indexOf(s[0])
  if(i == -1) return false
  return isSubsequence(s.slice(1),t.slice(i + 1))
}

var isSubsequence = function(s, t) {
  if(s.length == 0) return true;
  let sstack = s.split('')
  let tstack = t.split('')
  while(tstack.length){
    let tItem = tstack.pop()
    if(tItem == sstack[sstack.length - 1]) {
      sstack.pop()
      if(sstack.length == 0) return true
    }
  }
  return false
}


var isSubsequence = function(s, t){
  if(s.length == 0) return true;
  let sPos = 0
  let tPos = 0
  let sLen = s.length
  let tLen = t.length
  while(tPos < tLen){
    if(s[sPos] == t[tPos]) {
      sPos ++
      if(sPos == sLen) return true
    }
    tPos ++
  }
  return false
}

var isSubsequence = function(s, t) {
  let i = j = 0
   for(; i < s.length; i++){
     let result = false
     let char = s[i]
     inner: for(; j < t.length; j++){
       if(t[j] == char) {
         result = true
         j ++
         break inner
       }
     }
     if(!result) return false
   }
   return true
 };