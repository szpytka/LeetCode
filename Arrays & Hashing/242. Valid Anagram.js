/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sLookUp = {}
    let tLookUp = {}
    for(let char of s){
        if(sLookUp[char]) {
            sLookUp[char] += 1
        } else {
            sLookUp[char] = 1
        }
    }
     for(let char of t){
        if(tLookUp[char]) {
            tLookUp[char] += 1
        } else {
            tLookUp[char] = 1
        }
    }

    for(let key in sLookUp) {
        if(sLookUp[key] !== tLookUp[key]) {
            return false
        }
    }
    for(let key in tLookUp) {
        if(sLookUp[key] !== tLookUp[key]) {
            return false
        }
    }

    return true
    
};