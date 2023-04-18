/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const answer = [];
    for(let i = 0; i < nums.length; i++) {
        if (nums[i-1] === undefined) {
            answer[i] = nums[i];
        } else {
            answer[i] = nums[i] * answer[i-1];
        }
    }
    let product = 1;
    for(let i = nums.length - 1; i >= 0; i--) {
        if(nums[i+1] === undefined) {
            answer[i] = answer[i-1] * product;
            product = nums[i] * product; 
        } else {
            answer[i] = (answer[i-1] === undefined ? 1 : answer[i-1]) * product;
            product = product * nums[i]
        }
    }
    return answer;
};