
// 21. Merge Two Sorted Lists
// Easy

// 8963

// 893

// Add to List

// Share
// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

 

// Example 1:


// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: l1 = [], l2 = []
// Output: []
// Example 3:

// Input: l1 = [], l2 = [0]
// Output: [0]






Success
Details 
Runtime: 84 ms, faster than 75.70% of JavaScript online submissions for Merge Two Sorted Lists.
Memory Usage: 40.5 MB, less than 57.87% of JavaScript online submissions for Merge Two Sorted Lists.


var mergeTwoLists = function(l1, l2) {
    if(!l1){return l2}
    if(!l2){return l1}
    
    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next,l2)
        return l1
    }else{
        l2.next = mergeTwoLists(l2.next,l1)
        return l2
    }
};
