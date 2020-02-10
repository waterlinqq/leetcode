/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const stack = []
    let curr = head
    while(curr){
        stack.push(curr.val)
        curr = curr.next
    }
    // if(stack.length % 2) return false
    let mid = Math.floor(stack.length / 2 )
    curr = head
    while(mid){
        if(curr.val != stack.pop()) return false
        curr = curr.next
        mid --
    }
    return true
};

var isPalindrome = function(head){
    let str1 = str2 = ''
    while(head){
        str1 = str1 + head.val
        str2 = head.val + str2
        head = head.next
    }
    return str1 == str2
}

var isPalindrome = function(head){
    let fast = head
    let slow = head
    let cache = null
    let half
    while(fast && fast.next){
        cache = half
        half = slow
        slow = slow.next
        fast = fast.next.next
        half.next = cache
    }
    if(fast) {
        slow = slow.next
    }
    while(slow){
        if(slow.val != half.val) return false
        slow = slow.next
        half = half.next
    }
    return true
}



