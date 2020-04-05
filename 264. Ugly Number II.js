// 264. Ugly Number II
// Write a program to find the n-th ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

// Example:

// Input: n = 10
// Output: 12
// Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
// Note:

// 1 is typically treated as an ugly number.
// n does not exceed 1690.

/**
 * @param {number} n
 * @return {number}
 */
var cacheArray = (() => {
  const maxNth = 1690;
  const cache = Array(maxNth);
  let p2 = (p3 = p5 = 0);
  cache[0] = 1;
  for (let i = 1; i < maxNth; i++) {
    const next2 = cache[p2] * 2;
    const next3 = cache[p3] * 3;
    const next5 = cache[p5] * 5;
    const next = Math.min(next2, next3, next5);
    if (next == next2) p2++;
    if (next == next3) p3++;
    if (next == next5) p5++;
    cache[i] = next;
  }
  return cache;
})();
var nthUglyNumber = function (n) {
  return cacheArray[n - 1];
};

var cacheArray = (function () {
  const maxNth = 1690;
  const sortList = [1];
  const cache = new Set();
  while (cache.size < maxNth) {
    const item = sortList.shift();
    if (cache.has(item)) continue;
    cache.add(item);
    sortList.push(item * 2);
    sortList.push(item * 3);
    sortList.push(item * 5);
    sortList.sort((a, b) => a - b);
  }
  return Array.from(cache);
})();
var nthUglyNumber = function (n) {
  return cacheArray[n - 1];
};
