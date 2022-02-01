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
Runtime: 604 ms, faster than 81.40% of Python3 online submissions for Contains Duplicate II.
Memory Usage: 27.2 MB, less than 75.27% of Python3 online submissions for Contains Duplicate II.


class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        
        check = {}
        for idx, num in enumerate(nums):
            if num in check and idx - check[num] <=k:
                return True
        
            check[num] =idx
        return False
