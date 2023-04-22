var pivotIndex = function (nums) {
  let sumLeft = 0;
  let sumRight = 0;
  for (let i = 0; i < nums.length; i++) {
    sumLeft = 0;
    sumRight = 0;
    for (let j = i - 1; j >= 0; j--) {
      sumLeft += nums[j];
    }
    for (let j = i + 1; j < nums.length; j++) {
      sumRight += nums[j];
    }
    if (sumRight === sumLeft) {
      return i;
    }
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([1, 2, 3])); // -1
console.log(pivotIndex([2, 1, -1])); // 0
