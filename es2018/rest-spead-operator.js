const obj = {
  key: 1,
  name: "lee",
  value: 100,
  data: [1, 2, 3, 4],
};

const obj2 = { ...obj };

// 순서에 따라 덮어씌워짐
const obj3 = {
  ...obj,
  value: 200,
};

// 200
console.log(obj3.value);

// value는 100이 된다.
const obj4 = {
  value: 4000,
  ...obj,
};

console.log(obj4.value);

const arr = [1, 2, 3];
const arr2 = [...arr, 5, 6, 7];

console.log(arr2);

const { name, ...restObj } = obj;

console.log(restObj);
