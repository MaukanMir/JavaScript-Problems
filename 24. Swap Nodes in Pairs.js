// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 

// Example 1:


// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
// Example 2:

// Input: head = []
// Output: []
// Example 3:

// Input: head = [1]
// Output: [1]
 

// Constraints:

// The number of nodes in the list is in the range [0, 100].
// 0 <= Node.val <= 100

// Success
// Details 
// Runtime: 72 ms, faster than 75.84% of JavaScript online submissions for Swap Nodes in Pairs.
// Memory Usage: 38.9 MB, less than 61.51% of JavaScript online submissions for Swap Nodes in Pairs.

// Success
// Details 
// Runtime: 124 ms, faster than 6.13% of JavaScript online submissions for Swap Nodes in Pairs.
// Memory Usage: 38.2 MB, less than 99.29% of JavaScript online submissions for Swap Nodes in Pairs.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head || !head.next){return head}
    let firstNode = head
    let secondNode = head.next
    
    firstNode.next = swapPairs(secondNode.next)
    secondNode.next = firstNode
    
    return secondNode
};
