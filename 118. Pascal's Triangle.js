// 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

// 在杨辉三角中，每个数是它左上方和右上方的数的和。

// 示例:

// 输入: 5
// 输出:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// [1,5,10,10,5,1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const genRow = (row = []) => {
    return row.reduce((arr, n, i, row)=>{
      arr[i + 1] =  n + (row[i + 1] || 0)
      return arr
    },[1])
  }
  const ret = []
  while(ret.length < numRows){
    ret[ret.length] = genRow(ret[ret.length - 1])
  }
  return ret
};