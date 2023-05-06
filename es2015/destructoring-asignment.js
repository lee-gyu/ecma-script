const obj = {
  key: 1,
  name: "lee",
  data: [100, 200, 300],
};

// destructuring으로 할당
const { name, data } = obj;
console.log(data === obj.data);

const arr = [1, 2, 3, 4];
const [a, b, c, d] = arr;

const {
  data: [first, second],
} = obj;

console.log(first, second);
