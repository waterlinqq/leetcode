// 203. Remove Linked List Elements
// Remove all elements from a linked list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let dummy = new ListNode(NaN);
  dummy.next = head;
  let curr = head;
  let prev = dummy;
  while (curr) {
    if (curr.val == val) prev.next = curr.next;
    else prev = curr;
    curr = curr.next;
  }
  return dummy.next;
};
