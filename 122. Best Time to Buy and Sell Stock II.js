// 122. 买卖股票的最佳时机 II
// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

// 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

// 示例 1:

// 输入: [7,1,5,3,6,4]
// 输出: 7
// 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
//      随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
// 示例 2:

// 输入: [1,2,3,4,5]
// 输出: 4
// 解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
//      注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
//      因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
// 示例 3:

// 输入: [7,6,4,3,1]
// 输出: 0
// 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0 
  for(let i = 1; i < prices.length; i++){
    if(prices[i - 1] < prices[i]) profit += prices[i] - prices[i-1]
  }
  return profit
};

var maxProfit = function(prices){
  return prices.reduce((acc, price, i, prices) => {
    const price2 = prices[i + 1]
    if(price2 == null) return acc
    return acc +  (price2 > price ? price2 - price : 0) 
  }, 0)
}

var maxProfit = function(prices){
  if(prices.length == 0) return 0
  const len = prices.length
  const dp = Array(len).fill(Array(2))
  dp[0][0] = 0
  dp[0][1] = -prices[1]
  for(let i=1; i<len; i++){
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i])
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i])
  }
  return dp[len -1][0]
}

var maxProfit = function(prices){
  if(prices.length == 0) return 0 
  const len = prices.length
  const cash = Array(len)
  const hold = Array(len)
  cash[0] = 0
  hold[0] = -prices[0]
  for(let i = 1; i < len; i ++){
    cash[i] = Math.max(cash[i-1], hold[i-1] + prices[i])
    hold[i] = Math.max(hold[i-1], cash[i-1] - prices[i])
  }
  return cash[len - 1]
}

var maxProfit = function(prices){
  if(prices.length == 0) return 0 
  let cash = 0
  let hold = -prices[0]
  for(let i = 1; i < prices.length; i ++){
    cash = Math.max(cash, hold + prices[i])
    hold = Math.max(hold, cash - prices[i])
  }
  return cash
}