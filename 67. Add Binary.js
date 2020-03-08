// 67. 二进制求和
// 给定两个二进制字符串，返回他们的和（用二进制表示）。

// 输入为非空字符串且只包含数字 1 和 0。

// 示例 1:

// 输入: a = "11", b = "1"
// 输出: "100"
// 示例 2:

// 输入: a = "1010", b = "1011"
// 输出: "10101"
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let res = ''
  let car = 0
  let i = a.length - 1;
  let j = b.length - 1;
  for (; i >= 0 || j >= 0; i-- , j--) {
    let sum = car
    sum += i >= 0 ? +a[i] : 0
    sum += j >= 0 ? +b[j] : 0
    res += sum % 2
    car = Math.floor(sum / 2)
  }
  res += car == 1 ? '1' : ''
  return res.split('').reverse().join('')
};

/**
 * @param {string} a
 * @param {string} b
 * @param {number} count 到數第幾位
 * @param {number} carry 進位
 * @param {string} result 累積結果 
 * @return {string}
 */
var addBinary = function (a, b, count = 1, carry = 0, result = '') {
  const ac = a[a.length - count]
  const bc = b[b.length - count]
  const sum = (+ac || 0) + (+bc || 0) + carry
  // a無此位且b無此位且無進位 則返回累積結果
  if (ac == null && bc == null && carry == 0) return result
  result = sum % 2 + result
  carry = sum >= 2 ? 1 : 0
  count = count + 1
  return addBinary(a, b, count, carry, result)
}
