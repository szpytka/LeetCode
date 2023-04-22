var findDisappearedNumbers = function (nums) {
  let result = [];
  let presence = new Array(nums.length + 1).fill(false);
  for (let i = 0; i < nums.length; i++) {
    presence[nums[i]] = true;
  }
  for (let i = 1; i < presence.length; i++) {
    if (!presence[i]) result.push(i);
  }
  return result;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));

// var findDisappearedNumbers = function (nums) {
//   let result = [];
//   for (let i = 1; i <= nums.length; i++) {
//     if (nums.indexOf(i) === -1) result.push(i);
//   }
//   return result;
// };
