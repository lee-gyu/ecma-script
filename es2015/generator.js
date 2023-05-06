// ES2015: Generators
// 함수 실행을 중간에 멈췄다가 재개할 수 있는 기능
// function* 키워드를 사용하여 함수를 선언

function* generator() {
  yield 0;
  yield 1;
  yield 2;

  return -1;
}

const g = generator();

console.log(g.next()); // 0, false
console.log(g.next()); // 1, false
console.log(g.next()); // 2, false
console.log(g.next()); // -1, true
console.log(g.next()); // undefined, true

// generator를 이용하여 비동기 제어도 가능함
