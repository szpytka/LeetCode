/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let array = [];
    for(let i = 0; i < arr.length; i++) {
        array.push(fn(arr[i], i))
    }
    return array
};