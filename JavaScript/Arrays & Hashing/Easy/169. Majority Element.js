var majorityElement = function (nums) {
  let lookUp = {};
  for (let i = 0; i < nums.length; i++) {
    if (lookUp[nums[i]]) {
      lookUp[nums[i]] += 1;
    } else {
      lookUp[nums[i]] = 1;
    }
  }
  let max = 0;
  for (let key of Object.keys(lookUp)) {
    max = Math.max(max, lookUp[key]);
  }
  for (let key of Object.keys(lookUp)) {
    if (lookUp[key] === max) {
      return key;
    }
  }
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
