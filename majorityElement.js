

// 169. Majority Element
// Easy

// 6962

// 295

// Add to List

// Share
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -231 <= nums[i] <= 231 - 1
 







Success
Details 
Runtime: 80 ms, faster than 77.58% of JavaScript online submissions for Majority Element.
Memory Usage: 41 MB, less than 87.12% of JavaScript online submissions for Majority Element.




var majorityElement = function(nums) {
    let count =0
    let option = 0
    
    for(let i =0;i<nums.length;i++){
        if(count==0){
            option = nums[i]
        }
        
        count += nums[i] == option ? 1:-1
    }
    
    return option
};
