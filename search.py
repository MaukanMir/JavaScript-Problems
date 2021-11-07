# 704. Binary Search
# Easy

# 2528

# 79

# Add to List

# Share
# Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

# You must write an algorithm with O(log n) runtime complexity.

 

# Example 1:

# Input: nums = [-1,0,3,5,9,12], target = 9
# Output: 4
# Explanation: 9 exists in nums and its index is 4
# Example 2:

# Input: nums = [-1,0,3,5,9,12], target = 2
# Output: -1
# Explanation: 2 does not exist in nums so return -1
 

Constraints:

1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.

Success
Details 
Runtime: 72 ms, faster than 92.87% of JavaScript online submissions for Binary Search.
Memory Usage: 42.3 MB, less than 43.21% of JavaScript online submissions for Binary Search.

  
  
  
  
  /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left =0;
    let right = nums.length -1
    
    while(left <=right){
        let pivot = Math.floor((left +right) /2)
        if(nums[pivot] == target){return pivot}
        else if(nums[pivot]< target){left = pivot +1}
        else{right = pivot -1}
    }
    return -1
};
