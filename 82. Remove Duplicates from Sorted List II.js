// 82. Remove Duplicates from Sorted List II
// Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

// Return the linked list sorted as well.

// Example 1:

// Input: 1->2->3->3->4->4->5
// Output: 1->2->5
// Example 2:

// Input: 1->1->1->2->3
// Output: 2->3

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function(head, preVal = null) {
  if (head == null) return head;
  if ((head.next && head.val == head.next.val) || head.val == preVal)
    return deleteDuplicates(head.next, head.val);
  head.next = deleteDuplicates(head.next, head.val);
  return head;
};

var deleteDuplicates = function(head) {
  const dummyHead = new ListNode(NaN);
  dummyHead.next = head;
  let curr = dummyHead;
  while (curr.next) {
    if (curr.val == curr.next.val) {
      curr.repeat = curr.next.repeat = true;
    }
    curr = curr.next;
  }
  curr = dummyHead;
  while (curr.next) {
    if (curr.next.repeat) curr.next = curr.next.next;
    else curr = curr.next;
  }
  return dummyHead.next;
};
