const spiralOrderMatrix = (array) => {
  
  let row = 0
  let col = 0
  let rowLen = array.length
  let colLen = array[0].length
  let finalArray = []
  
  while(row<rowLen && col<colLen) {
    
    // Right
    for (i=col; i<colLen; i++) {
      finalArray.push(array[row][i])
    }
    row++
    
    // Down
    for (i=row; i<rowLen; i++) {
      finalArray.push(array[i][colLen-1])
    }
    colLen--
    
    // Left
    for (i=colLen-1; i>=col && (row < rowLen); i--) {
      finalArray.push(array[rowLen-1][i])
    }
    rowLen--
    
    // Up
    for(i=rowLen-1; i>=row && (col < colLen); i--) {
      finalArray.push(array[i][col])
    }
    col++
    
  }
  
  return finalArray
}

console.log(spiralOrderMatrix([[1,2,3],[4,5,6],[7,8,9]]))
console.log(spiralOrderMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))

/**
 * Space Complexity - O(MN) (As we have new array with m*n elements)
 * Time Complexity - O(MN) (As we are reaching each element once)
 */