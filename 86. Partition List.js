// 86. Partition List
// Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

// Example:

// Input: head = 1->4->3->2->5->2, x = 3
// Output: 1->2->2->4->3->5
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  const dummy1 = new ListNode(-1);
  const dummy2 = new ListNode(-1);
  dummy1.next = head;
  let left = dummy1;
  let right = dummy2;
  while (head) {
    if (head.val < x) {
      left.next = head;
      left = left.next;
    } else {
      right.next = head;
      right = right.next;
    }
    head = head.next;
  }
  right.next = null;
  left.next = dummy2.next;
  return dummy1.next;
};
