const obj = {
  key: 1,
  name: "lee",
  value: 100,
};

// const ~ of를 이용하여 iterable 순회
// const ~ in을 이용하여 object 순회
for (const key in obj) {
  console.log(key);
}

const arr = [1, 2, 3, 4];

// const ~ of를 이용하여 iterable 순회
for (const value of arr) {
  console.log(value);
}

// [Symbol.iterator]를 이용하여 iterable을 만들 수 있음.
const obj2 = {
  ...obj,
  [Symbol.iterator]: function* () {
    yield* Object.keys(this);
  },
};

for (const key of obj2) {
  console.log(key);
}
