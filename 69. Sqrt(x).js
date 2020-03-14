// 69. Sqrt(x)
// Implement int sqrt(int x).

// Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

// Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

// Example 1:

// Input: 4
// Output: 2
// Example 2:

// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since 
//              the decimal part is truncated, 2 is returned.
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let min = 0
 let max = x
 let mid 
 while(min <= max){ // 等於情況應納入 
   mid = Math.floor((min + max)/2)
   if(mid * mid > x) max = mid - 1 
   else if (mid * mid < x) min = mid + 1
   else return mid 
 }
 // 最後應判對中間平方是否大於mid 是的話 -1 這邊簡化為返回max
 return max
};