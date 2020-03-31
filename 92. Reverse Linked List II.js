// 92. Reverse Linked List II
// Reverse a linked list from position m to n. Do it in one-pass.

// Note: 1 ≤ m ≤ n ≤ length of list.

// Example:

// Input: 1->2->3->4->5->NULL, m = 2, n = 4
// Output: 1->4->3->2->5->NULL
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
let successor = null;
var reverseN = function(head, n) {
  if (n == 1) {
    successor = head.next;
    return head;
  }
  const last = reverseN(head.next, n - 1);
  head.next.next = head;
  head.next = successor;
  return last;
};
var reverseBetween = function(head, m, n) {
  if (m == 1) {
    return reverseN(head, n);
  } else {
    const last = reverseBetween(head.next, m - 1, n - 1);
    head.next = last;
    return head;
  }
};
