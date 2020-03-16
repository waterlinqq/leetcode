// 322. Coin Change
// You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// Example 1:

// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Note:
// You may assume that you have an infinite number of each kind of coin.
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const memo = {}
  const dp = function(amount){
    if(amount in memo) return memo[amount] 
    if(amount == 0) return 0
    let res = Infinity
    for(const coin of coins){
      if(coin > amount) continue
      const subSolve  = dp(amount - coin)
      if(subSolve == -1) continue
      res = Math.min(res, subSolve + 1)
    }
    
    return memo[amount] = res == Infinity ? -1 :res
  }
  return dp(amount)
};

var coinChange = function(coins, amount){
  const dp = Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for(let i = 1; i <= amount; i++){
    for(const coin of coins){
      if(coin > i) continue
      dp[i] = Math.min(dp[i], dp[i-coin] + 1)
    }
  }
  return dp[amount] == Infinity ? -1 : dp[amount]
}