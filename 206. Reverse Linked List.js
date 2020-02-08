var reverseList = function(head) {
    const reverse = function(prev, curr){
        if(curr == null) return prev
        const next = curr.next
        curr.next = prev
        return reverse(curr, next)
    }
    return reverse(null, head)
};

var reverseList = function(head){
    let [prev, curr] = [null, head]
    while(curr != null){
        [curr, curr.next, prev] = [curr.next, prev, curr]
    }
    return prev
}

var reverseList = function(head){
    if(!head || !head.next) return head
    var reverseHead = reverseList(head.next)
    var next = head.next
    next.next = head
    head.next = null
    return reverseHead
}