// 1. Two Sum
// Easy

// 25831

// 838

// Add to List

// Share
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.



// Success
// Details 
// Runtime: 88 ms, faster than 72.16% of JavaScript online submissions for Two Sum.
// Memory Usage: 41.3 MB, less than 15.42% of JavaScript online submissions for Two Sum.


var twoSum = function(nums, target) {
    let data = {}
    nums.map((item,idx) => data[item] == undefined ? data[item]= idx: item)
    
    for(let i =0;i<nums.length;i++){
        
        let current_sum = target - nums[i]
        if(data[current_sum]!= undefined && data[current_sum] !=i ){
            return [i,data[current_sum]]
        }
    }
};
