// 661. Image Smoother
// Given a 2D integer matrix M representing the gray scale of an image, you need to design a smoother to make the gray scale of each cell becomes the average gray scale (rounding down) of all the 8 surrounding cells and itself. If a cell has less than 8 surrounding cells, then use as many as you can.

// Example 1:
// Input:
// [[1,1,1],
//  [1,0,1],
//  [1,1,1]]
// Output:
// [[0, 0, 0],
//  [0, 0, 0],
//  [0, 0, 0]]
// Explanation:
// For the point (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
// For the point (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
// For the point (1,1): floor(8/9) = floor(0.88888889) = 0
// Note:
// The value in the given matrix is in the range of [0, 255].
// The length and width of the given matrix are in the range of [1, 150].
/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
  const xLen = M[0].length;
  const yLen = M.length;
  const R = Array.from({ length: yLen }, () => Array(xLen));
  M[-1] = M[M.length] = [];
  for (let y = 0; y < yLen; y++) {
    for (let x = 0; x < xLen; x++) {
      let total = 0;
      let count = 0;
      let val;
      if ((val = M[y - 1][x - 1]) != null) (total += val), (count += 1);
      if ((val = M[y - 1][x]) != null) (total += val), (count += 1);
      if ((val = M[y - 1][x + 1]) != null) (total += val), (count += 1);
      if ((val = M[y][x - 1]) != null) (total += val), (count += 1);
      if ((val = M[y][x]) != null) (total += val), (count += 1);
      if ((val = M[y][x + 1]) != null) (total += val), (count += 1);
      if ((val = M[y + 1][x - 1]) != null) (total += val), (count += 1);
      if ((val = M[y + 1][x]) != null) (total += val), (count += 1);
      if ((val = M[y + 1][x + 1]) != null) (total += val), (count += 1);
      R[y][x] = Math.floor(total / count);
    }
  }
  return R;
};
