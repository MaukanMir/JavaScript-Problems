You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

 

Example 1:


Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
Output: 16
Explanation: The perimeter is the 16 yellow stripes in the image above.
Example 2:

Input: grid = [[1]]
Output: 4
Example 3:

Input: grid = [[1,0]]
Output: 4
 

Success
Details 
Runtime: 219 ms, faster than 60.43% of JavaScript online submissions for Island Perimeter.
Memory Usage: 50.1 MB, less than 89.32% of JavaScript online submissions for Island Perimeter.


/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    
    
    let ROWS = grid.length, COLS = grid[0].length, score = 0
    
    for(let r =0; r< ROWS; r++){
        for(let c=0; c< COLS; c++){
            
            if (grid[r][c] ==1){score +=4
                if( r>0 && grid[r-1][c] ==1){score-=2}
                if( c>0 && grid[r][c-1] ==1){score-=2}}
        }
    }
    
    return score
};
