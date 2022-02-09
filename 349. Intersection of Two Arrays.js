Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

Success
Details 
Runtime: 77 ms, faster than 71.80% of JavaScript online submissions for Intersection of Two Arrays.
Memory Usage: 42.3 MB, less than 20.82% of JavaScript online submissions for Intersection of Two Arrays.


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    
    let short = nums1.length < nums2.length ? nums1 : nums2
    let longest = nums2.length > nums1.length ? nums2 : nums1
    let values = []
    for(let i =0; i< longest.length; i++){
        if( i < short.length){
            if(longest.includes(short[i]) && !values.includes(short[i])){
                values.push(short[i])
            }
        }
    }
    
    return values
};
