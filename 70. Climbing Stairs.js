// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


// Success
// Details 
// Runtime: 68 ms, faster than 86.05% of JavaScript online submissions for Climbing Stairs.
// Memory Usage: 38.5 MB, less than 83.12% of JavaScript online submissions for Climbing Stairs.


/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let one =1
    let two =1
    
    for(let i =0; i<n-1; i++){
        let temp = one
         one = one + two
        two = temp
        
    }
    return one
};
