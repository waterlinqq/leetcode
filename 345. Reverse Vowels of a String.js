/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var arr = [...s]
    var i = 0
    var j = arr.length -1 
    var reg = /[ieaou]/i35
    while(i < j){
        while(i < j){
            if(reg.test(arr[i])) break
            i++
        }
        while(i < j){
            if(reg.test(arr[j]))break
            j--
        }
        if(i < j){
            var temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
        i++
        j--
    }
    return arr.join('') 
};