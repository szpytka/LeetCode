var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  let sHashMap = {};
  let tHashMap = {};
  for (let i = 0; i < s.length; i++) {
    if (sHashMap[s[i]] !== tHashMap[t[i]]) {
      return false;
    }
    sHashMap[s[i]] = i + 1;
    tHashMap[t[i]] = i + 1;
  }
  return true;
};

console.log(isIsomorphic('egg', 'add')); // true
console.log(isIsomorphic('foo', 'bar')); // false
console.log(isIsomorphic('paper', 'title')); // true
