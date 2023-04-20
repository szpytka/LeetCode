var canPlaceFlowers = function (flowerbed, n) {
  if (
    (flowerbed.length === 1 && flowerbed[0] === 0) ||
    (flowerbed.length === 1 && flowerbed[0] === 1 && n === 0)
  ) {
    return true;
  } else if (flowerbed.length === 1 && flowerbed[0] === 1 && n === 1) {
    return false;
  }
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      (flowerbed[i] === 0 &&
        flowerbed[i - 1] === undefined &&
        flowerbed[i + 1] === 0) ||
      (flowerbed[i] === 0 &&
        flowerbed[i + 1] === undefined &&
        flowerbed[i - 1] === 0)
    ) {
      flowerbed[i] = 1;
      count++;
    } else if (
      flowerbed[i] === 0 &&
      flowerbed[i - 1] === 0 &&
      flowerbed[i + 1] === 0
    ) {
      flowerbed[i] = 1;
      count++;
    }
  }
  return n <= count;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // true
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1)); // true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); // false
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)); // false
