/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (root, k) {
    let length = 0
    let curr = root
    while (curr) {
        length++
        curr = curr.next
    }
    let partial = Math.floor(length / k)
    let rest = length % k
    let dummyHead = new ListNode(-1)
    let current = dummyHead
    while (k) {
        var temp = root 
        current.next = temp
        let i = 0
        while(i < partial){
            temp = temp ? temp.next : null
            i++
        }
        if(rest){
            temp = temp.next
            rest --
        }
        root = temp
        if(temp) temp.next = null

        // //
        // let preHead = new ListNode(-1)
        // let current = preHead
        // let i = 0
        // let nullNode = new ListNode(null)
        // nullNode.next = nullNode
        // while (++i < partial) {
        //     current.next = new ListNode(root.val)
        //     root = root.next || nullNode
        //     current = current.next
        // }
        // if (rest) {
        //     current.next = new ListNode(root.val)
        //     root = root.next
        //     current = current.next
        //     rest--
        // }
        // dummyHead.next = new ListNode(preHead.next)
        // k--
    }
    return dummyHead.next
};