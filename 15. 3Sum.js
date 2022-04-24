# /**
# Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

# Notice that the solution set must not contain duplicate triplets.

 

# Example 1:

# Input: nums = [-1,0,1,2,-1,-4]
# Output: [[-1,-1,2],[-1,0,1]]
# Example 2:

# Input: nums = []
# Output: []
# Example 3:

# Input: nums = [0]
# Output: []
 

# Success
# Details 
# Runtime: 161 ms, faster than 77.32% of JavaScript online submissions for 3Sum.
# Memory Usage: 52.3 MB, less than 82.69% of JavaScript online submissions for 3Sum.



  * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    
    nums.sort(function(a,b){return a-b})
    let res = []
    
    for(let i =0; i< nums.length; i++){
        if(nums[i] >0){continue}
        if(i ==0 || nums[i] != nums[i-1]){
            twoSum(i,nums,res)
        }
    }
    return res
};

var twoSum = function(i,nums,res){
    let left = i+1, right = nums.length-1
    
    while(left < right){
        if(nums[i] + nums[left] + nums[right] < 0){left+=1}
        else if(nums[i] + nums[left] + nums[right] > 0){right -=1}
        else{
            res.push([nums[i],nums[left],nums[right]])
            left+=1
            right-=1
            while(left < right && nums[left] == nums[left-1]){
                left+=1;
            }
        }
    }
    return res
}
