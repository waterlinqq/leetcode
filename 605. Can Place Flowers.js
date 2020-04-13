// 605. Can Place Flowers
// Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.

// Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), and a number n, return if n new flowers can be planted in it without violating the no-adjacent-flowers rule.

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: True
// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: False
// Note:
// The input array won't violate no-adjacent-flowers rule.
// The input array size is in the range of [1, 20000].
// n is a non-negative integer which won't exceed the input array size.
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] == 1) i += 1;
    // i已經種花 可以跳過i+1
    else if (flowerbed[i + 1] == 1) i += 2;
    // i+1 已經種花 因此i不可種 可以跳過i+2
    else if (flowerbed[i - 1] == 1) continue;
    // i-1 因此i不可種 i+1還是有機會種  直接略過
    else (flowerbed[i] = 1), (n -= 1); // 將i設置為已種花 尚須種植的花扣掉一朵
  }
  return n <= 0; // 當遍歷完 判斷是否已無尚須種植的花
};
