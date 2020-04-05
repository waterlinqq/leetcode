// 309. Best Time to Buy and Sell Stock with Cooldown
// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

// You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
// After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
// Example:

// Input: [1,2,3,0,2]
// Output: 3
// Explanation: transactions = [buy, sell, cooldown, buy, sell]
/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  let buy = -prices.shift();
  let sell = 0;
  let lastsell = 0;
  for (const price of prices) {
    const temp = sell;
    buy = Math.max(buy, lastsell - price);
    sell = Math.max(sell, buy + price);
    lastsell = temp;

    // buy = Math.max(buy, lastsell - price);
    // lastsell = sell;
    // sell = Math.max(sell, buy + price);
  }
  return sell;
};

var maxProfit = function (prices) {
  if (prices.length == 0) return 0;
  const length = prices.length;
  const dp = Array.from({ length }, () => []);
  let max = 0;
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  dp[-1] = [0, -Infinity];
  for (let i = 1; i < length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]);
    max = Math.max(max, dp[i][0]);
  }
  console.log(dp);
  return max;
};
