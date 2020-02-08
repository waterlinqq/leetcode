var getIntersectionNode = function(headA, headB) {
    while(headA){
        headA.sep = 1
        headA = headA.next
    }
    while(headB){
        if(headB.sep) return headB
        headB = headB.next
    }
};

var getIntersectionNode = function(headA, headB){
    var pA = headA
    var pB = headB
    while(pA !== pB){
        pA = pA ? pA.next : headB
        pB = pB ? pB.next : headA
    }
    return pA
}