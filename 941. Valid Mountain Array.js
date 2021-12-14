// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

 

// Example 1:

// Input: arr = [2,1]
// Output: false
// Example 2:

// Input: arr = [3,5,5]
// Output: false
// Example 3:

// Input: arr = [0,3,2,1]
// Output: true

// Success
// Details 
// Runtime: 101 ms, faster than 25.38% of JavaScript online submissions for Valid Mountain Array.
// Memory Usage: 41.2 MB, less than 95.81% of JavaScript online submissions for Valid Mountain Array.


/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let start =0
    let size = arr.length
    
    while(start +1 < size && arr[start] < arr[start+1]){
        start +=1;
    }
    
    if(start ==0 || start == size-1){return false;}
    
    while(start +1 < size && arr[start] > arr[start+1]){
        start +=1;
    }
    
    return start == size-1;
};
