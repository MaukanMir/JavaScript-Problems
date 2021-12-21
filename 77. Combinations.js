// Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].

// You may return the answer in any order.

 

// Example 1:

// Input: n = 4, k = 2
// Output:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]
// Example 2:

// Input: n = 1, k = 1
// Output: [[1]]
 

// Constraints:

// 1 <= n <= 20
// 1 <= k <= n



// Success
// Details 
// Runtime: 112 ms, faster than 87.89% of JavaScript online submissions for Combinations.
// Memory Usage: 43.8 MB, less than 97.37% of JavaScript online submissions for Combinations.


/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = []
    
    var backtrack = function(start,comb){
        if (comb.length == k){
            res.push([...comb])
            return}
        
        for(let i =start; i<=n; i++){
            comb.push(i)
            backtrack(i+1,comb)
            comb.pop()
        }
    }
     backtrack(1,[])
        return res
};
