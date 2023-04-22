var generate = function (numRows) {
  let array = [];
  let tempArray = [];
  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      array.push([1]);
    } else if (i === 1) {
      array.push([1, 1]);
    } else {
      for (let j = 0; j <= array.length; j++) {
        if (j === 0) {
          tempArray.push(1);
        } else if (array[i - 1][j] !== undefined) {
          tempArray.push(array[i - 1][j - 1] + array[i - 1][j]);
        } else {
          tempArray.push(1);
        }
      }
      array.push(tempArray);
      tempArray = [];
    }
  }
  return array;
};

console.log(generate(5));
console.log(generate(1));
