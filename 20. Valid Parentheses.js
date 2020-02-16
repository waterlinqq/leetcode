/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s){
    var stack = []
    var map = {
        '{':'}',
        '[':']',
        '(':')'
    }
    for(var ch of s){
        if(ch in map) stack.push(ch)
        else if (map[stack.pop()] != ch) return false
    }
    return !stack.length
}