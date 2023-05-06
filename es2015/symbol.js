// for을 이용하여 기존 Symbol과 같은 Symbol을 만들 수 있다.
// 안 쓰면 별개의 Symbol이 된다.
const symbol = Symbol.for("test");
const symbol2 = Symbol("test");
const symbol3 = Symbol.for("test");
const symbol4 = Symbol("test");

console.log(symbol === symbol2);
console.log(symbol === symbol3);
console.log(symbol2 === symbol4);

const obj = {
  [symbol]: "hidden",
  [symbol2]: "hidden2",
  [symbol4]: "hidden4",
  test: "visible",
};

console.log(obj.test);
console.log(obj[symbol]);
// [symbol]과 결과가 같다
console.log(obj[symbol3]);

// 같은 test지만, 다르다
console.log(obj[symbol2]);
console.log(obj[symbol4]);

console.log("---");

// symbol은 for ~ in로 순회해도 노출되지 않는다.
for (const key in obj) {
  console.log(key);
}
