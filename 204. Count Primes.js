// 204. Count Primes
// Count the number of prime numbers less than a non-negative number, n.

// Example:

// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

/**
 * @param {number} n
 * @return {number}
 */

var countPrimes = function (n) {
  const isPrime = Array(n);
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (!isPrime[i - 1]) {
      count++;
      for (let j = i * i; j <= n; j += i) {
        isPrime[j - 1] = false;
      }
    }
  }
  return count;
};
