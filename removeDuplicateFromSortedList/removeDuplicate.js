// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head) {
        return head;
    }

    let map = new Map()
    let prev = head
    map.set(prev.val,true)
    let cur = head.next
    while (cur !== null) {
        if (map.get(cur.val)) {
            prev.next = cur.next
            cur = prev.next
        } else {
            map.set(cur.val, true)
            prev=prev.next
            cur = cur.next
        }

    }
    return head;
};

module.exports = {
    deleteDuplicates,
    ListNode
}