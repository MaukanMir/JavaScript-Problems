// 283. Move Zeroes
// Easy

// 7088

// 197

// Add to List

// Share
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

Success
Details 
Runtime: 88 ms, faster than 89.27% of JavaScript online submissions for Move Zeroes.
Memory Usage: 43.6 MB, less than 39.74% of JavaScript online submissions for Move Zeroes.


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let index = 0
    
    for(let i =0;i< nums.length;i++){
        if(nums[i] !=0){
            nums[index] = nums[i]
            index +=1
        }
    }
    
    for(let i =index;i<nums.length;i++){
        nums[i] = 0
    }
    
    
};
