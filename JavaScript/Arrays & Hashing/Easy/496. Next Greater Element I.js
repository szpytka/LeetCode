var nextGreaterElement = function (nums1, nums2) {
  let array = [];
  for (let i = 0; i < nums1.length; i++) {
    let temp = 0;
    for (let j = nums2.indexOf(nums1[i]); j < nums2.length; j++) {
      if (nums1[i] < nums2[j]) {
        temp = Math.max(temp, nums2[j]);
        break;
      }
    }
    array.push(temp === 0 ? -1 : temp);
  }
  return array;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1,3,-1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])); // [3,-1]
console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7])); // [7,7,7,7,7]

/* if (nums1[i] < nums2[nums2.indexOf(nums1[i]) + 1]) {
      array.push(nums2[nums2.indexOf(nums1[i]) + 1]);
    } else {
      array.push(-1);
    }*/
