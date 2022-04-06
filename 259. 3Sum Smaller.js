Given an array of n integers nums and an integer target, find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.

 

Example 1:

Input: nums = [-2,0,1,3], target = 2
Output: 2
Explanation: Because there are two triplets which sums are less than 2:
[-2,0,1]
[-2,0,3]
Example 2:

Input: nums = [], target = 0
Output: 0
Example 3:

Input: nums = [0], target = 0
Output: 0
 

Constraints:

n == nums.length
0 <= n <= 3500
-100 <= nums[i] <= 100
-100 <= target <= 100

Success
Details 
Runtime: 84 ms, faster than 78.28% of JavaScript online submissions for 3Sum Smaller.
Memory Usage: 43.7 MB, less than 83.84% of JavaScript online submissions for 3Sum Smaller.




/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    
    nums = nums.sort(function(a,b){return a-b})
    let result =0;
    
    for(let i =0; i< nums.length-2; i++){
        let left = i+1, right = nums.length-1;
        
        while(left < right){
            if(nums[left] + nums[right] + nums[i] < target){
                result += right-left;
                left++
            }else{right -=1}
        }
    }
    return result
};
