var mergeTwoLists = function(l1, l2){
    if(l1 == null) return l2
    if(l2 == null) return l1
    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    }else{
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
}


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

var mergeTwoLists = function(l1, l2){
    var prevHead = new ListNode(-1)
    var prevNode = prevHead
    while(l1 && l2){
        if(l1.val < l2.val){
            prevNode.next = l1
            l1 = l1.next
        }else{
            prevNode.next = l2
            l2 = l2.next
        }
        prevNode = prevNode.next
    }
    prevNode.next = l1 ? l1 : l2
    return prevHead.next
}