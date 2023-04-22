/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';

  let array = [];
  let temp = '';
  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j < strs[0].length; j++) {
      if (strs[0][j] === strs[i][j] && strs[i][j] !== undefined) {
        temp += strs[0][j];
      } else if (strs[0][j] !== strs[i][j]) {
        break;
      }
    }
    array.push(temp.length);
    temp = '';
  }

  let resultLoop = array.sort((a, b) => a - b)[0];
  if (resultLoop === 0) return '';
  let result = '';
  for (let i = 0; i < resultLoop; i++) {
    result += strs[0][i];
  }

  return result;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
console.log(longestCommonPrefix(['cir', 'car']));

// better and more optimalized

// var longestCommonPrefix = function (strs) {
//   strs.sort();
//   for (let i = 0; i < strs[0].length; i++) {
//     if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].slice(0, i);
//   }
//   return strs[0];
// };

// console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
// console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
// console.log(longestCommonPrefix(['cir', 'car']));
