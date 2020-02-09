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
var swapPairs = function (head) {
    if (!head || !head.next) return head
    let next = head.next
    let nextnext = swapPairs(next.next)
    next.next = head
    head.next = nextnext
    return next
};


var swapPairs = function(head){
    let prev = preHead = new ListNode(-1)
    preHead.next = head
    let first
    let second 
    while((first = prev.next)&& (second = first.next)){
        first.next = second.next 
        prev.next = second
        second.next = first
        prev = first
    }
    return preHead.next
}





var swapPairs = function(head) {
    let thead = new ListNode(0);
    thead.next = head;
    let tmp = thead;
    while(tmp.next != null && tmp.next.next != null){
        let start = tmp.next;
        let end = start.next;
        tmp.next = end;
        start.next = end.next;
        end.next = start;
        tmp = start;
    }
    return thead.next;
};
