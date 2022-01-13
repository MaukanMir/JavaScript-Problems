// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]
 

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.

Success
Details 
Runtime: 80 ms, faster than 68.20% of JavaScript online submissions for Subsets.
Memory Usage: 40.8 MB, less than 68.60% of JavaScript online submissions for Subsets.


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums, idx = null) {
    if(idx == null){idx = nums.length-1}
    if(idx <0){return [[]]}
    
    let got = nums[idx]
    let powerSet = subsets(nums,idx-1)
    let length = powerSet.length
    for(let i =0; i< length; i++){
        const currentSet= powerSet[i]
        powerSet.push(currentSet.concat(got))
    }
return powerSet
};
