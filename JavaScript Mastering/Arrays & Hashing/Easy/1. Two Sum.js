/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */const twoSum = function(nums, target) {
     const lookUp = {}
     for(let i = 0; i < nums.length; i++) {
         let complement = target - nums[i]
         if (complement in lookUp) {
             return [lookUp[complement], i]
         }
        lookUp[nums[i]] = i;
     }
     return []
};