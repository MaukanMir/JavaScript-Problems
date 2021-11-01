



// 67. Two Sum II - Input Array Is Sorted
// Easy

// 3793

// 819

// Add to List

// Share
// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

 

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
 








// Success
// Details 
// Runtime: 64 ms, faster than 98.62% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
// Memory Usage: 39.2 MB, less than 38.50% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.




/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let start =0;
    let end = numbers.length-1;
    
    for(let i =0;i<numbers.length;i++){
        let captured = numbers[start] + numbers[end]
        
        if(captured == target){return [start+1,end+1]}
        else if(captured < target){start+=1}
        else if(captured > target){end -=1}
    }
};
