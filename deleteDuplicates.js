// 83. Remove Duplicates from Sorted List
// Easy

// 3512

// 163

// Add to List

// Share
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

// Example 1:


// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:


// Input: head = [1,1,2,3,3]
// Output: [1,2,3]




// Success
// Details 
// Runtime: 72 ms, faster than 99.21% of JavaScript online submissions for Remove Duplicates from Sorted List.
// Memory Usage: 40.8 MB, less than 44.55% of JavaScript online submissions for Remove Duplicates from Sorted List.


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
var deleteDuplicates = function(head) {
    let current_node = head
    
    while(head){
        
        while(head.next && head.next.val === head.val){
            head.next = head.next.next}
        head = head.next
    }
    return current_node
};

