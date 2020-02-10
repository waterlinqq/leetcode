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
var addTwoNumbers = function(l1,l2){
    const stack1 = []
    const stack2 = []
    const stack = []
    while(l1){
        stack1.push(l1.val)
        l1 = l1.next
    }
    while(l2){
        stack2.push(l2.val)
        l2 = l2.next
    }
    let add1 = false
    while(stack1.length || stack2.length || add1){
        let sum =  (stack1.pop() || 0 )+ (stack2.pop() || 0 )
        if(add1) sum += 1 
        if(sum >= 10){
            sum -= 10
            add1 = true
        }else{
            add1 = false
        }
        // console.log(sum)
        stack.push(sum)
    }
    const preHead = new ListNode(-1)
    let curr = preHead
    while(stack.length){
        curr.next = new ListNode(stack.pop())
        curr = curr.next
    }
    return preHead.next
}