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

var deleteDuplicates = function(head){
    var curr = head
    while(curr && curr.next){
        if(curr.val == curr.next.val){
            curr.next = curr.next.next
        }else{
            curr = curr.next
        }
    }
    return head
}

var deleteDuplicates = function(head){
    if(!head || !head.next) return head
    if(head.val == head.next.val) {
        head.next = head.next.next
        deleteDuplicates(head)
    }else{
        deleteDuplicates(head.next)
    }
    return head
}