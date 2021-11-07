// 977. Squares of a Sorted Array
// Easy

// 3740

// 128

// Add to List

// Share
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.


Success
Details 
Runtime: 112 ms, faster than 85.81% of JavaScript online submissions for Squares of a Sorted Array.
Memory Usage: 45.8 MB, less than 61.59% of JavaScript online submissions for Squares of a Sorted Array.



/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map(item => item**2).sort(function(a,b){return a-b})
};
