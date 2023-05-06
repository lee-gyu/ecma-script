const obj = {
  key: 1,
  name: "lee",
  data: [100, 200, 300],
};

// 얕은 복사로 신규 object 생성
const obj2 = { ...obj };

console.log(obj === obj2);
console.log(obj.data === obj2.data);

const arr = [1, 2, 3, 4, [5, 6, 7]];
const arr2 = [...arr];
