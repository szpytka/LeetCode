/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let dict = {};
    for(let element of nums) {
        if(dict[element]) {
            return true
        } else {
            dict[element] = 1;
        }
    }
    return false;
};