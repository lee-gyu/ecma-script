const arr = [
  [1, 2, 3],
  [4, 5],
  [7, 8],
];

// 내부 중첩된 배열을 flat 평평하게 한다. (2차원 -> 1차원)
console.log(arr.flat());

// 3차원도 가능함
const arr2 = [
  [1, 2, 3],
  [4, 5],
  [7, 8, [9, 10]],
];

console.log(arr2.flat(2));

const arr3 = [[1, 2, 3], [4, 5], [7, 8, [9, 10]], [[[11]]], 12, 13];

// 차원이 다르더라도 flat을 사용하면 평평하게 만들 수 있음.
console.log(arr3.flat(3));
