// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]
 

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10


// Success
// Details 
// Runtime: 72 ms, faster than 96.69% of JavaScript online submissions for Subsets II.
// Memory Usage: 40.8 MB, less than 91.80% of JavaScript online submissions for Subsets II.


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    
    nums.sort(function(a,b){
        return a-b
    })
    let res = []
    
    var backtrack = function(i,subset){
        if(nums.length == i){
            res.push([...subset])
            return
        }
        
        subset.push(nums[i])
        backtrack(i+1, subset)
        subset.pop()
        
        while(i+1 < nums.length && nums[i] == nums[i+1]){
            i+=1
        }
        
        backtrack(i+1, subset)
    }
    
    backtrack(0,[])
    return res
};
