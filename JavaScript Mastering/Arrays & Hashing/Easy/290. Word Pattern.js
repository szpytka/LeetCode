var wordPattern = function (pattern, s) {
  pattern = pattern.split('');
  s = s.split(' ');
  if (pattern.length !== s.length) return false;
  let hashMap = {};
  for (let i = 0; i < pattern.length; i++) {
    if (hashMap[pattern[i]] === undefined) hashMap[pattern[i]] = s[i];
    if (hashMap[pattern[i]] !== s[i]) return false;
  }
  let array = [];
  for (value of Object.values(hashMap)) {
    array.push(value);
  }
  return array.length !== new Set(array).size ? false : true;
};

console.log(wordPattern('abba', 'dog cat cat dog')); // true
console.log(wordPattern('abba', 'dog cat cat fish')); // false
console.log(wordPattern('abba', 'dog dog dog dog')); // false
console.log(wordPattern('aaaa', 'dog cat cat dog')); // false
console.log(wordPattern('abc', 'dog cat dog')); // false
