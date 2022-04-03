An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and newColor. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with newColor.

Return the modified image after performing the flood fill.

 

Example 1:


Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.
Example 2:

Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2
Output: [[2,2,2],[2,2,2]]

Success
Details 
Runtime: 70 ms, faster than 93.43% of JavaScript online submissions for Flood Fill.
Memory Usage: 44.1 MB, less than 84.55% of JavaScript online submissions for Flood Fill.


/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let ROWS = image.length, COLS = image[0].length, keys = {}, oldColor = image[sr][sc]
    
    if(image[sr][sc] == newColor){return image}
    
    var dfs = function(r,c){
        if(r>=0 && r < ROWS && c>= 0 && c< COLS && keys[[r,c]] == undefined & image[r][c] == oldColor){
            keys[[r,c]] = image[r][c]
            image[r][c] = newColor
            dfs(r+1,c),
            dfs(r-1,c),
            dfs(r, c+1),
            dfs(r,c-1)
        }
    }
    
    
    dfs(sr,sc)
    return image
    
};
