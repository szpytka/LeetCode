/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) {

    let lookUp = {};
    for (let num of nums) {
        lookUp[num] ? lookUp[num]++ : lookUp[num] = 1
    }

    let result = [];
    for (let key in lookUp) {
        result.push({value: key, appears: lookUp[key]});
    }

    result.sort((a,b) => b.appears - a.appears);
    return (result.slice(0, k)).map((obj) => obj.value);

};