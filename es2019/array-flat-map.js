// flatMap
// flat과는 다르게, 한 차원만 map을 수행하여 배열인 경우 평평하게 함

const arr = [
  { name: "A", data: [1, 2, 3] },
  { name: "B", data: [4, 5] },
  { name: "C", data: 6 },
];

console.log(arr.flatMap((ar) => ar.data));
