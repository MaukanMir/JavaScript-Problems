// 203. Remove Linked List Elements
// Easy

// 3607

// 139

// Add to List

// Share
// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

 

// Example 1:


// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]
// Example 2:

// Input: head = [], val = 1
// Output: []
// Example 3:

// Input: head = [7,7,7,7], val = 7
// Output: []
 

// Constraints:

// The number of nodes in the list is in the range [0, 104].
// 1 <= Node.val <= 50
// 0 <= val <= 50


// Success
// Details 
// Runtime: 92 ms, faster than 78.73% of JavaScript online submissions for Remove Linked List Elements.
// Memory Usage: 42.4 MB, less than 100.00% of JavaScript online submissions for Remove Linked List Elements.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    
    let sentinel = new ListNode(0);
    sentinel.next = head
    let prev = sentinel
    let curr = head;
    
    while(curr){
        if(curr.val == val){ prev.next = curr.next}
        else{prev = curr}
        curr = curr.next
    }
    
    return sentinel.next
};

