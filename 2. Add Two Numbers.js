// 2. Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0
  let dummy = new ListNode(-1)
  let curr = dummy
  while (l1 || l2 || carry) {
    let sum = carry
    if (l1) sum += l1.val, l1 = l1.next
    if (l2) sum += l2.val, l2 = l2.next
    carry = sum >= 10 ? 1 : 0
    curr.next = new ListNode(sum % 10)
    curr = curr.next
  }
  return dummy.next
};

var addTwoNumbers = function (l1, l2, carry = 0) {
  let sum = carry
  if (!l1 && !l2 && !carry) return null
  if (l1) sum += l1.val, l1 = l1.next
  if (l2) sum += l2.val, l2 = l2.next
  if (sum >= 10) carry = 1
  else carry = 0
  const node = new ListNode(sum % 10)
  node.next = addTwoNumbers(l1, l2, carry)
  return node
};