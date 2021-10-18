const removeDuplicate = require('./removeDuplicate')
const ListNode = require('./removeDuplicate').ListNode

/**
 * @param {Array} input
 * @return {ListNode}
 */
function constructListNodeFromArray(input) {
    let inputListNode = new ListNode
    let inputListNodePointer = inputListNode
    for (let i of input) {
        inputListNodePointer.next = new ListNode(i)
        inputListNodePointer = inputListNodePointer.next
    }

    return inputListNode
}

describe('remove Duplicate function', () => {
    test('Should remove Duplicate',() => {
        expect(removeDuplicate.deleteDuplicates(constructListNodeFromArray([1,1,2,2,2]))).toEqual(constructListNodeFromArray([1,2]))
    })
    test('Should remove Duplicate',() => {
        expect(removeDuplicate.deleteDuplicates(constructListNodeFromArray([1,1,1,1,1,1,1,1,1]))).toEqual(constructListNodeFromArray([1]))
    })
    test('Should remove Duplicate of larget list',() => {
        let list = []
        for (let i=0;i<1000;i++) {
            list.push(1)
        }
        expect(removeDuplicate.deleteDuplicates(constructListNodeFromArray(list))).toEqual(constructListNodeFromArray([1]));
    })
})