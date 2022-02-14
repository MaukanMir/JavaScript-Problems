Given an array nums of integers and integer k, return the maximum sum such that there exists i < j with nums[i] + nums[j] = sum and sum < k. If no i, j exist satisfying this equation, return -1.

 

Example 1:

Input: nums = [34,23,1,24,75,33,54,8], k = 60
Output: 58
Explanation: We can use 34 and 24 to sum 58 which is less than 60.
Example 2:

Input: nums = [10,20,30], k = 15
Output: -1
Explanation: In this case it is not possible to get a pair sum less that 15.


Success
Details 
Runtime: 60 ms, faster than 98.90% of JavaScript online submissions for Two Sum Less Than K.
Memory Usage: 42.5 MB, less than 16.18% of JavaScript online submissions for Two Sum Less Than K.


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function(nums, k) {
    
    nums.sort(function(a,b){return a-b})
  
    let rightPointer = nums.length -1
    let leftPointer = 0
    let maxValue = -Infinity
    while (leftPointer < rightPointer){
        if(nums[leftPointer] + nums[rightPointer] < k){
            maxValue = Math.max(maxValue, nums[leftPointer] + nums[rightPointer])
            leftPointer ++
        }
        
        else if(nums[leftPointer] + nums[rightPointer] >=k){ rightPointer --;}
    }
        
    return maxValue >0 ? maxValue : -1
};
