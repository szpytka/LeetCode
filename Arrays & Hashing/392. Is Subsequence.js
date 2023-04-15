/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {

  if (s.length > t.length) return false; 

  let i = 0; // index of s string

  for (let j = 0; j < t.length; j++) {

    if (s[i] === t[j]) {
      i++;
    }

  }

  return i === s.length
  
};