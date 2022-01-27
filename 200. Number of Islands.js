// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

Success
Details 
Runtime: 591 ms, faster than 5.01% of JavaScript online submissions for Number of Islands.
Memory Usage: 66.7 MB, less than 5.15% of JavaScript online submissions for Number of Islands.
Next challenges:


/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    
    let ROWS = grid.length
    let COLS = grid[0].length
    let visited ={}
    let area = 0
    
    var dfs = function(r,c){
        if(r <0 || r>= ROWS || c <0 || c>= COLS || visited[[r,c]] != undefined || grid[r][c] =='0'){
            return false
        }
        
        
       visited[[r,c]] =1
        dfs(r+1,c)
        dfs(r-1,c)
        dfs(r,c+1)
        dfs(r,c-1)
        return true
        
        
    }
    
    
    for(let r =0; r<ROWS; r++){
        for(let c = 0; c<COLS; c++){
            if(visited[[r,c]] == undefined && grid[r][c] =='1' && dfs(r,c)){
                area +=1
            }
        }
    }
    
    return area
};



Success
Details 
Runtime: 80 ms, faster than 98.21% of JavaScript online submissions for Number of Islands.
Memory Usage: 41.5 MB, less than 91.17% of JavaScript online submissions for Number of Islands.


Without dicitionary and recording visited spots


/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    
    let ROWS = grid.length
    let COLS = grid[0].length

    let area = 0
    
    var dfs = function(r,c){
        if(r <0 || r>= ROWS || c <0 || c>= COLS  || grid[r][c] =='0'){
            return false
        }
        
        grid[r][c] ='0'
        dfs(r+1,c)
        dfs(r-1,c)
        dfs(r,c+1)
        dfs(r,c-1)
        return true
        
        
    }
    
    
    for(let r =0; r<ROWS; r++){
        for(let c = 0; c<COLS; c++){
            if( grid[r][c] =='1' && dfs(r,c)){
                area +=1
            }
        }
    }
    
    return area
};
