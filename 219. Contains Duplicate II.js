Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
0 <= k <= 105

Success
Details 
Runtime: 161 ms, faster than 65.02% of JavaScript online submissions for Contains Duplicate II.
Memory Usage: 62.7 MB, less than 16.94% of JavaScript online submissions for Contains Duplicate II.


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    
    const check = {}
    
    for(let i=0; i< nums.length; i++){
        if(check[nums[i]] != undefined && i - check[nums[i]] <=k){
            return true
        }
        check[nums[i]] =i
    }
    
    return false
};
