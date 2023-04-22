/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    
    let lookUp = {};

    for(let i = 0; i < strs.length; i++) {
        let key = strs[i].split('').sort().join('')
        if(lookUp[key]) {
            lookUp[key].push(strs[i])
        } else {
            lookUp[key] = [strs[i]]
        }
    }

    return Object.values(lookUp)

};