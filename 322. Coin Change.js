// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

 

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0
 

// Constraints:

// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104

// Success
// Details 
// Runtime: 104 ms, faster than 95.36% of JavaScript online submissions for Coin Change.
// Memory Usage: 43.3 MB, less than 84.72% of JavaScript online submissions for Coin Change.


/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const numberOfCoins = new Array(amount+1).fill(Infinity)
    
    numberOfCoins[0] =0;
    
    for(let i =0; i< coins.length; i++){
        
        for(let j =0; j< numberOfCoins.length; j++){
            
            if(coins[i] <= j){
             numberOfCoins[j] =  Math.min (numberOfCoins[j], numberOfCoins[j-coins[i]]+1)
            }
        }
    }
    
    return numberOfCoins[amount] != Infinity ? numberOfCoins[amount] : -1
};
