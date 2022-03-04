Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 



Success
Details 
Runtime: 87 ms, faster than 62.01% of JavaScript online submissions for Binary Search.
Memory Usage: 45.1 MB, less than 38.02% of JavaScript online submissions for Binary Search.


var search = function(nums, target) {
    
    let left =0, right = nums.length -1
    
    while(left<=right){
        let mid = Math.floor( (left +right)/2 )
        if(nums[mid] == target){return mid}
        else if(nums[left] < target){
            left ++
        }
        else if(nums[right] > target){right = mid-1}
    }
    return -1
};
