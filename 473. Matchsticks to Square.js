// You are given an integer array matchsticks where matchsticks[i] is the length of the ith matchstick. You want to use all the matchsticks to make one square. You should not break any stick, but you can link them up, and each matchstick must be used exactly one time.

// Return true if you can make this square and false otherwise.

 

// Example 1:


// Input: matchsticks = [1,1,2,2,2]
// Output: true
// Explanation: You can form a square with length 2, one side of the square came two sticks with length 1.
// Example 2:

// Input: matchsticks = [3,3,3,3,4]
// Output: false
// Explanation: You cannot find a way to form a square with all the matchsticks.
 

// Constraints:

// 1 <= matchsticks.length <= 15
// 1 <= matchsticks[i] <= 108

// Success
// Details 
// Runtime: 124 ms, faster than 68.29% of JavaScript online submissions for Matchsticks to Square.
// Memory Usage: 40 MB, less than 80.49% of JavaScript online submissions for Matchsticks to Square.




/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    if(matchsticks.length ==0){return false}
    let total = matchsticks.reduce((a,b)=> a+b)
    let len = Math.floor(total/4)
    let sides =  new Array(4).fill(0);
    
    if(total /4 != len){return false}
    
    matchsticks.sort(function(a,b){return b-a;})
    
    var backtrack = function(i){
        if(i == matchsticks.length){return true}
        
        for(let j =0; j< 4; j++){
            if(sides[j] + matchsticks[i] <=len){
                sides[j] += matchsticks[i]
                if(backtrack(i+1)){return true}
                
                sides[j] -= matchsticks[i]
            }
            
        }
        return false
    }
    
    return backtrack(0)
};
