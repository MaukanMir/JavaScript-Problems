// Given an integer array nums and an integer k, return true if it is possible to divide this array into k non-empty subsets whose sums are all equal.

 

// Example 1:

// Input: nums = [4,3,2,3,5,2,1], k = 4
// Output: true
// Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.
// Example 2:

// Input: nums = [1,2,3,4], k = 3
// Output: false
 

// Constraints:

// 1 <= k <= nums.length <= 16
// 1 <= nums[i] <= 104
// The frequency of each element is in the range [1, 4].

// Success
// Details 
// Runtime: 76 ms, faster than 87.78% of JavaScript online submissions for Partition to K Equal Sum Subsets.
// Memory Usage: 39.4 MB, less than 71.67% of JavaScript online submissions for Partition to K Equal Sum Subsets.


// Success
// Details 
// Runtime: 72 ms, faster than 94.44% of JavaScript online submissions for Partition to K Equal Sum Subsets.
// Memory Usage: 39.5 MB, less than 62.78% of JavaScript online submissions for Partition to K Equal Sum Subsets.



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    if (nums.length ==0){return false}
    
    let sum = nums.reduce((a,b)=> a+b)
    
    if(sum%k){return false}
    nums.sort(function(a,b){return b-a});
    
    let target = sum/k
    
    let used = nums.map(item => false)
    
    var backtrack = function(i,k, subsetSum){
        if(k==0){return true}
        
        if(subsetSum == target){return backtrack(0,k-1,0)}
        
        for(let j=i; j< nums.length; j++){
            if(used[j] || subsetSum + nums[j] > target){
                continue
            }
            used[j] = true
            
            if(backtrack(j+1,k, subsetSum + nums[j])){return true}
            used[j] = false
        }
        return false
    }
    
    return backtrack(0,k,0)
    
};
