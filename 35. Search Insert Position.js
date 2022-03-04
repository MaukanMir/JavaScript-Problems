Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4


Success
Details 
Runtime: 68 ms, faster than 83.34% of JavaScript online submissions for Search Insert Position.
Memory Usage: 43.3 MB, less than 5.05% of JavaScript online submissions for Search Insert Position.


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    let left =0, right = nums.length-1
    
    while(left<=right){
        let mid = left + (right-left)/2
        
        if(nums[mid] === target){return mid}
        else if(nums[right] > target){right-=1}
        else if(nums[left] < target){left +=1}
    }
    
    return left
};
