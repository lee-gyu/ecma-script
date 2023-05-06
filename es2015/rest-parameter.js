function foo(a, b, c) {
  return a + b + c;
}

const args = [1, 2, 3];

console.log(foo(...args));

const args2 = [3, 4, 6, 7];

console.log(foo(5, ...args2));

// 함수 인자 전달을 나머지 연산자(...)로 전달 할 수 있음.
// 배열의 순서대로 전달됨.
