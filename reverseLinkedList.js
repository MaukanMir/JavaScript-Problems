
// 206. Reverse Linked List
// Easy

// 9077

// 162

// Add to List

// Share
// Given the head of a singly linked list, reverse the list, and return the reversed list.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:


// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []



Success
Details 
Runtime: 72 ms, faster than 93.79% of JavaScript online submissions for Reverse Linked List.
Memory Usage: 40.7 MB, less than 35.63% of JavaScript online submissions for Reverse Linked List.



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
var reverseList = function(head) {
    if(head == null){return head}
    if(head != null && head.next == null ){return head}
    
    let prev = null
    let curr = head
    
    while(curr){
        let next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node
    }
    head = prev
    return head
};



