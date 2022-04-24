Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
 

Example 1:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Example 2:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

Success
Details 
Runtime: 71 ms, faster than 66.69% of JavaScript online submissions for Search a 2D Matrix.
Memory Usage: 41.9 MB, less than 85.67% of JavaScript online submissions for Search a 2D Matrix.


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let ROW =0, COLS = matrix[0].length -1
    
    while(ROW < matrix.length && COLS >=0){
        if(matrix[ROW][COLS] < target){ROW++}
        else if(matrix[ROW][COLS] > target){COLS -=1}
        else{return true}
    }
    
    return false
};
