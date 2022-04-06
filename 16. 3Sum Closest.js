Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
 

Constraints:

3 <= nums.length <= 1000
-1000 <= nums[i] <= 1000
-104 <= target <= 104

Success
Details 
Runtime: 105 ms, faster than 51.96% of JavaScript online submissions for 3Sum Closest.
Memory Usage: 42.6 MB, less than 67.35% of JavaScript online submissions for 3Sum Closest.


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    
    let minValue = Infinity
    nums.sort(function(a,b){return a-b})
    
    for(let i =0; i< nums.length-2; i++){
        let left = i+1, right = nums.length-1;
        
        while(left < right){
            let total = nums[i] + nums[left] + nums[right];
            if(Math.abs(total - target) < Math.abs(minValue)){
                minValue = target - total;
            }
            if(total< target){left++;}
            else{
                right --;
            }
        }
    }
    
    return target-minValue
};
