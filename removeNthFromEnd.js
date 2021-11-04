
// 9. Remove Nth Node From End of List
// Medium

// 7397

// 374

// Add to List

// Share
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

// Example 1:


// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]
 

// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz




Success
Details 
Runtime: 72 ms, faster than 93.38% of JavaScript online submissions for Remove Nth Node From End of List.
Memory Usage: 40.1 MB, less than 53.87% of JavaScript online submissions for Remove Nth Node From End of List.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let fast = head
    let slow = head
    let counter = 0
    while(counter <n){
        fast = fast.next
        counter +=1}
    
    if(!fast){
        return head.next
    }
    
    while(fast.next!= null){
        slow = slow.next
        fast = fast.next
    }
    
    slow.next = slow.next.next
    return head
};
