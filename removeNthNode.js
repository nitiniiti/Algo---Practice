var removeNthFromEnd = function (head, n) {
    let hare = head, curr = head;
    while (n--) {
        hare = hare.next;
    }
    while (hare && hare.next) {
        curr = curr.next;
        hare = hare.next;
    }
    if (!hare) {
        head = head.next;
    } else {
        curr.next = curr.next ? curr.next.next : null;
    }
    return head;
};


console.log(removeNthFromEnd({
    val: 1,
    next: { val: 2, next: { val: 3, next: null } }
}, 2));