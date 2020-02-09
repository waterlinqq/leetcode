/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let length = 0
  let preHead = new ListNode(-1)
  preHead.next = head
  let current = head
  while(current){
      length += 1
      current = current.next
  }
  n = length - n
  current = preHead
  while(n){
      current = current.next
      n -= 1
  }
  current.next = current.next.next
  return preHead.next
};


var removeNthFromEnd = function(head, n){
    let preHead = new ListNode(-1)
    preHead.next = head
    let slow = preHead
    let fast = preHead
    while(n){
        fast = fast.next
        n -= 1
    }
    while(fast.next){
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return preHead.next
}