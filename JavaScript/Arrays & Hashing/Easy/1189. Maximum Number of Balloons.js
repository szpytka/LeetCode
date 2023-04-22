var maxNumberOfBalloons = function (text) {
  let hash = { b: 0, a: 0, l: 0, o: 0, n: 0 };
  for (let i = 0; i < text.length; i++) hash[text[i]]++;
  return Math.floor(Math.min(hash.b, hash.a, hash.l / 2, hash.o / 2, hash.n));
};

console.log(maxNumberOfBalloons('nlaebolko')); // 1
console.log(maxNumberOfBalloons('loonbalxballpoon')); // 2
console.log(maxNumberOfBalloons('leetcode')); // 0
console.log(maxNumberOfBalloons('balon')); // 0
console.log(maxNumberOfBalloons('ballon')); // 0
console.log(maxNumberOfBalloons('baloon')); // 0
console.log(maxNumberOfBalloons('balloon')); // 1
console.log(maxNumberOfBalloons('leetcode')); // 0
console.log(
  maxNumberOfBalloons(
    'krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw'
  )
); // 10

// var maxNumberOfBalloons = function (text) {
//   let hashMap = {};
//   for (let char of text) {
//     if (hashMap[char]) {
//       hashMap[char] += 1;
//     } else {
//       hashMap[char] = 1;
//     }
//   }
//   let array = [];
//   for (let char of 'balloon') {
//     if (!hashMap[char]) return 0;
//     if (char === 'l' || char === 'o') {
//       array.push(Math.floor(hashMap[char] / 2));
//     } else {
//       array.push(hashMap[char]);
//     }
//   }
//   return array.sort((a, b) => a - b)[0];
// };
