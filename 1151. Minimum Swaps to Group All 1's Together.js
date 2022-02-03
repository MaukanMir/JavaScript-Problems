Given a binary array data, return the minimum number of swaps required to group all 1’s present in the array together in any place in the array.

 

Example 1:

Input: data = [1,0,1,0,1]
Output: 1
Explanation: There are 3 ways to group all 1's together:
[1,1,1,0,0] using 1 swap.
[0,1,1,1,0] using 2 swaps.
[0,0,1,1,1] using 1 swap.
The minimum is 1.
Example 2:

Input: data = [0,0,0,1,0]
Output: 0
Explanation: Since there is only one 1 in the array, no swaps are needed.
Example 3:

Input: data = [1,0,1,0,1,0,0,1,1,0,1]
Output: 3
Explanation: One possible solution that uses 3 swaps is [0,0,0,0,0,1,1,1,1,1,1].
 

Success
Details 
Runtime: 118 ms, faster than 58.49% of JavaScript online submissions for Minimum Swaps to Group All 1's Together.
Memory Usage: 50.2 MB, less than 13.84% of JavaScript online submissions for Minimum Swaps to Group All 1's Together.


/**
 * @param {number[]} data
 * @return {number}
 */
var minSwaps = function(data) {
    
    let ones = data.reduce((a,b)=> a+b,0)
    let maxValue = -1
    let count =0
    let right =0
    let left =0
    
    while(right < data.length){
        count  += data[right]
        right +=1
        
        if(right - left > ones){
            count -= data[left]
            left +=1
        }
        
        maxValue = Math.max(maxValue,count)
    }
    
    return ones - maxValue
};
