var numUniqueEmails = function (emails) {
  let dict = {};
  for (let i = 0; i < emails.length; i++) {
    let array = emails[i].split('@');
    dict[i] = {
      localname: array[0].split('.').join('').split('+')[0],
      domain: array[1],
    };
  }
  let arr = [];
  for (let i = 0; i < emails.length; i++) {
    arr.push(dict[i].localname + '@' + dict[i].domain);
  }
  let result = arr.filter((value, index) => arr.indexOf(value) === index);
  return result.length;
};

console.log(
  numUniqueEmails([
    'test.email+alex@leetcode.com',
    'test.e.mail+bob.cathy@leetcode.com',
    'testemail+david@lee.tcode.com',
  ])
);
console.log(
  numUniqueEmails(['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com'])
);
