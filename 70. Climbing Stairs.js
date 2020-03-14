// 70. Climbing Stairs
// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Note: Given n will be a positive integer.

// Example 1:

// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

/**
 * @param {number} n
 * @return {number}
 */

// n 的解 可能是 n-1的解法在多爬一步 或是 n-2的解法在多爬兩步 所以共有n -1 + n -2的解法總和
var climbStairs = function(n) {
  let fibo = []
  fibo[0] = 1 // 不爬
  fibo[1] = 1
  let i = 2
  while(i <= n){
    fibo[i] = fibo[i -1] + fibo[i-2]
  }
  return fibo[n]
};

var climbStairs = function(n, fibo = [1,1]){
  if(fibo[n]) return fibo[n]
  fibo[n] = climbStairs(n-1, fibo) + climbStairs(n-2, fibo)
  return fibo[n]
}



var climbStairs = function(n, ac1=1, ac2=1 ){
  if(n <= 1) return ac1
  return climbStairs(n - 1, ac2, ac1 + ac2)
}
