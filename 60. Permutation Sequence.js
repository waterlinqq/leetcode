// 60. Permutation Sequence
// The set [1,2,3,...,n] contains a total of n! unique permutations.

// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// Given n and k, return the kth permutation sequence.

// Note:

// Given n will be between 1 and 9 inclusive.
// Given k will be between 1 and n! inclusive.
// Example 1:

// Input: n = 3, k = 3
// Output: "213"
// Example 2:

// Input: n = 4, k = 9
// Output: "2314"

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const get = (n, sum = 1) => {
  sum *= n
  if (n == 1) return sum
  return get(n - 1, sum)
}
var getPermutation = function (n, k) {
  const arr = Array.from({ length: n }).map((_, i) => i + 1)
  const result = []
  const fac = arr.reduce((map, _, i) => {
    map[i + 1] = map[i] * (i + 1)
    return map
  }, { 0: 1 })
  const helper = function (n, k) {
    if (n == 0) return
    const num = fac[n - 1]
    // const i = Math.floor(k / num)
    const i = Math.ceil(k / num)
    k = k % num || num
    // result.push(arr[i])
    // arr.splice(i,1)
    result.push(arr.splice(i - 1, 1))
    return helper(n - 1, k)
  }
  helper(n, k)
  return result.join('')
};




var getPermutation = function (n, k) {
  // 出现的所有数字，之后从中取值
  const nums = [...Array(n)].map((vo, i) => i + 1);

  // 结果，应有nums组成，并且不重复
  const re = [];

  let nextK = k;
  for (let i = n; i > 0; i--) {
    // 首字符相同数字的数量
    const factorialN = factorial(i - 1);
    const num = Math.ceil(nextK / factorialN);
    re.push(nums.splice(num - 1, 1));
    nextK = (nextK % factorialN) || factorialN;
  }

  return re.join('');
};

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return factorial(n - 1) * n;
}

