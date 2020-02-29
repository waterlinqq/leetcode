// 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

// 你可以假设除了整数 0 之外，这个整数不会以零开头。
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for(let i = digits.length -1; i >= 0; i--){
    digits[i] += 1
    digits[i] %= 10
    if(digits[i] != 0) return digits
  }
  return [1,...digits]
};



var plusOne = function(digits) {
  const stack = []
  const ret = []
  let plus = 1
  while(digits.length){
    let num = digits.pop()
    num += plus
    if(num >= 10) plus = 1
    else plus = 0
    stack.push(num % 10) 
  }
  if(plus) stack.push(1)
  while(stack.length){
    ret.push(stack.pop())
  }
  return ret
};