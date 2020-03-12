// 142. 环形链表 II
// 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

// 说明：不允许修改给定的链表。

 

// 示例 1：

// 输入：head = [3,2,0,-4], pos = 1
// 输出：tail connects to node index 1
// 解释：链表中有一个环，其尾部连接到第二个节点。

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


// a為鏈表頭至入口長
// b為環長
// f = 2s
// f = s + nb  n為圈數
// 得s = nb
// 觀察a + nb必定在練表入口
// 首次相遇時 s 已經走了nb步
// 只要讓s在走a步 就會到入口
// 在讓一指針從頭走a s也走a步 此時必相交
var detectCycle = function(head) {
  let slow = head
  let fast = head
  while(fast && fast.next){
    slow = slow.next
    fast = fast.next.next
    if(slow == fast){
      while(head !== slow){
        slow = slow.next
        head = head.next
      }
      return slow
    }
  }
  return null
};

// #標記
var detectCycle = function(head){
  while(head){
    if(head.flag) return head
    head.flag = 1
    head = head.next
  }
  return null
}
// 判重
var detectCycle = function(head){
  const arr = []
  while(head){
    if(arr.includes(head)) return head
    else arr.push(head)
    head = head.next
  }
  return null
}