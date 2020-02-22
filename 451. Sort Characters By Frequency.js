// 给定一个字符串，请将字符串里的字符按照出现的频率降序排列。

// 示例 1:

// 输入:
// "tree"

// 输出:
// "eert"

// 解释:
// 'e'出现两次，'r'和't'都只出现一次。
// 因此'e'必须出现在'r'和't'之前。此外，"eetr"也是一个有效的答案。
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const map = [...s].reduce(map =>{
    map[s] = (map[s] || 0) + 1
    return map
  },{})
  return Object.entries(map).sort((pairA, pairB) => pairB[1] - pairA[1])
  .map(pair => pair[0].repeat(pair[1]))
  .join('')
  
}
