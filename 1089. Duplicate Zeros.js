// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

 

// Example 1:

// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
// Example 2:

// Input: arr = [1,2,3]
// Output: [1,2,3]
// Explanation: After calling your function, the input array is modified to: [1,2,3]


// Success
// Details 
// Runtime: 68 ms, faster than 99.93% of JavaScript online submissions for Duplicate Zeros.
// Memory Usage: 40.8 MB, less than 16.54% of JavaScript online submissions for Duplicate Zeros.


/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let total = arr.filter(item => item ===0).length
    len = arr.length
    for(let i = len-1; i>=0; i--){
        if(i + total < len){arr[i+total] = arr[i]}
        if(arr[i] ==0){
            total -=1
            if(i + total < len){arr[i +total] = 0}
        }
    }
    return
};
