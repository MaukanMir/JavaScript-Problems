// Given an array of strings nums containing n unique binary strings each of length n, return a binary string of length n that does not appear in nums. If there are multiple answers, you may return any of them.

 

// Example 1:

// Input: nums = ["01","10"]
// Output: "11"
// Explanation: "11" does not appear in nums. "00" would also be correct.
// Example 2:

// Input: nums = ["00","01"]
// Output: "11"
// Explanation: "11" does not appear in nums. "10" would also be correct.
// Example 3:

// Input: nums = ["111","011","001"]
// Output: "101"
// Explanation: "101" does not appear in nums. "000", "010", "100", and "110" would also be correct.
 

// Constraints:

// n == nums.length
// 1 <= n <= 16
// nums[i].length == n
// nums[i] is either '0' or '1'.
// All the strings of nums are unique.

Success
Details 
Runtime: 68 ms, faster than 92.63% of JavaScript online submissions for Find Unique Binary String.
Memory Usage: 40.1 MB, less than 34.74% of JavaScript online submissions for Find Unique Binary String.


/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    strSet = [... new Set(nums)]
    var backTrack = function(i,cur){
        if(i == nums.length){
            let res = cur.join("")
            return strSet.includes(res) ? null: res
        }
            
            res = backTrack(i+1,cur)
            if(res){return res}
            
            cur[i] ="1"
            res = backTrack(i+1,cur)
            if(res){return res}
    }
        
        return backTrack(0, nums.map(item=> item ? "0":"0"))
};
