// 892. Surface Area of 3D Shapes
// On a N * N grid, we place some 1 * 1 * 1 cubes.

// Each value v = grid[i][j] represents a tower of v cubes placed on top of grid cell (i, j).

// Return the total surface area of the resulting shapes.



// Example 1:

// Input: [[2]]
// Output: 10
// Example 2:

// Input: [[1,2],[3,4]]
// Output: 34
// Example 3:

// Input: [[1,0],[0,2]]
// Output: 16
// Example 4:

// Input: [[1,1,1],[1,0,1],[1,1,1]]
// Output: 32
// Example 5:

// Input: [[2,2,2],[2,1,2],[2,2,2]]
// Output: 46


// Note:

// 1 <= N <= 50
// 0 <= grid[i][j] <= 50

/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
  if (grid.length == 0) return 0
  let result = 0
  for (let x = 0; x < grid[0].length; x++) {
    for (let y = 0; y < grid.length; y++) {
      let area = 0
      let n = grid[x][y]
      area += n * 6
      if (n) area -= n - 1
      if (grid[x - 1] && grid[x - 1][y]) area -= Math.min(n, grid[x - 1][y])
      if (grid[x][y - 1]) area -= Math.min(n, grid[x][y - 1])
    }
  }
  return result
};