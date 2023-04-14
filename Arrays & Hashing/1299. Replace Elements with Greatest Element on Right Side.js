/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {

    let max = arr[arr.length - 1];

    arr[arr.length - 1] = -1;

    for(let a = arr.length - 2; a >=0 ; a--) {

        let temp = arr[a];
        arr[a] = max;
        max = Math.max(max, temp);

    }

    return arr;

};