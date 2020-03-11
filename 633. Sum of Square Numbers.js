/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
    var a = 0
    var b
    while ((b = c - a * a) >= 0) {
        if (!(Math.sqrt(b) % 1)) return true
        a++
    }
    return false
};



// #二分
var hasIntSqurt = function(n){
  let max = n
  let min = 0
  while(max >= min ){
    let mid = Math.floor((max + min) /2)
    let square = mid * mid
    if(square > n) max = mid - 1
    else if(square < n) min = mid + 1
    else return true
  }
  return false
}

var judgeSquareSum = function (c) {
  let a = 0
  let b  
  while((b = c - a * a)>= 0){
    if(hasIntSqurt(b)) return true
    a ++
  }
  return false
};