// 343. Integer Break
// Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.

// Example 1:

// Input: 2
// Output: 1
// Explanation: 2 = 1 + 1, 1 × 1 = 1.
// Example 2:

// Input: 10
// Output: 36
// Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
// Note: You may assume that n is not less than 2 and not larger than 58.

/**
 * @param {number} n
 * @return {number}
 */
// 盡量都拆成 ２與３
// n..0 => 9 = 3 ** 3 => 3 ** n
// n..1 => 10 = 3 ** 2 * 4  => 3 ** (n * 1) * 4
// n..2 => 11 = 3 ** 3 * 2 => 3 ** n * 2
var integerBreak = function (n) {
  if (n === 2) return 1;
  if (n === 3) return 2;
  const div = Math.floor(n / 3);
  switch (n % 3) {
    case 0:
      return 3 ** div;
    case 1:
      return 3 ** (div - 1) * 4;
    case 2:
      return 3 ** div * 2;
  }
};

var integerBreak = function (n) {
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i] || 0, j * (i - j), j * dp[i - j]);
    }
  }
  return dp[n];
};
