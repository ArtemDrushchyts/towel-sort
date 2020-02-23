
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  
  let arr = [];
  for(let i= 0; i < matrix.length; i++) {
    if(matrix.length === 0 ){
      return arr;   
    }
    else if(i%2  == 1 ){
      arr = [...arr, ...matrix[i].reverse()]
    } else {
      arr = [...arr, ...matrix[i]]
    }
  }
  return arr;
}
