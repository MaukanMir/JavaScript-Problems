// Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2
 

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.



// Success
// Details 
// Runtime: 76 ms, faster than 92.95% of JavaScript online submissions for Max Consecutive Ones.
// Memory Usage: 41.5 MB, less than 39.85% of JavaScript online submissions for Max Consecutive Ones.


var findMaxConsecutiveOnes = function(nums) {
    let curr =0
    let max =0
    
    for(let i =0; i< nums.length; i++){
        if(nums[i]== 1){curr +=1}
        else if(nums[i] != 1){
            max = Math.max(curr,max)
            curr =0
        }
    }
    return Math.max(curr,max)
};
