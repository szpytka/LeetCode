var lengthOfLastWord = function (s) {
  let string = s.trim().replace(/ +/g, ' ').split(' ');
  return string[string.length - 1].length;
};

console.log(lengthOfLastWord('   fly me   to   the moon  '));
