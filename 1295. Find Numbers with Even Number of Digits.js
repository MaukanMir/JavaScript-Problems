

// 1295. Find Numbers with Even Number of Digits
// Easy

// 978

// 92

// Add to List

// Share
// Given an array nums of integers, return how many of them contain an even number of digits.

 

// Example 1:

// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.
// Example 2:

// Input: nums = [555,901,482,1771]
// Output: 1 
// Explanation: 
// Only 1771 contains an even number of digits.

Success
Details 
Runtime: 68 ms, faster than 97.20% of JavaScript online submissions for Find Numbers with Even Number of Digits.
Memory Usage: 40.6 MB, less than 52.35% of JavaScript online submissions for Find Numbers with Even Number of Digits.


/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    return nums.filter(item => item.toString().length %2 ==0).length
};
