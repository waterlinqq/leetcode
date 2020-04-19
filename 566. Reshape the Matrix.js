// 566. Reshape the Matrix
// In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.

// You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.

// The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.

// If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

// Example 1:
// Input:
// nums =
// [[1,2],
//  [3,4]]
// r = 1, c = 4
// Output:
// [[1,2,3,4]]
// Explanation:
// The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.
// Example 2:
// Input:
// nums =
// [[1,2],
//  [3,4]]
// r = 2, c = 4
// Output:
// [[1,2],
//  [3,4]]
// Explanation:
// There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix. So output the original matrix.
// Note:
// The height and width of the given matrix is in range [1, 100].
// The given r and c are all positive.
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  const arr = [];
  const res = [];
  if (nums.length * nums[0].length !== r * c) return nums;
  for (const numbers of nums) arr.push(...numbers);
  for (let i = 0; i < r; i++) res.push(arr.splice(0, c));
  return res;
};

var matrixReshape = function (nums, r, c) {
  const yLen = nums.length;
  const xLen = nums[0].length;
  const stack = [];
  const result = Array.from({ length: r }, () => Array(c));
  let x, y;
  if (yLen * xLen !== r * c) return nums;
  x = y = 0;
  while (y < yLen) {
    while (x < xLen) {
      stack.push(nums[y][x]);
      x += 1;
    }
    x = 0;
    y += 1;
  }
  x = c - 1;
  y = r - 1;
  while (y >= 0) {
    while (x >= 0) {
      result[y][x] = stack.pop();
      x -= 1;
    }
    y -= 1;
    x = c - 1;
  }
  return result;
};
