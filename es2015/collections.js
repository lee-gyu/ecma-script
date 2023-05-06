const map = new Map();
const set = new Set();
const weakMap = new WeakMap();
const weakSet = new WeakSet();

// js에도 다른 언어들이 가지고 있는 map, set이 es6에 추가되었다.
// WeakMap, WeakSet은 참조를 가지고 있는 객체만 저장이 가능하다. (키 값이 참조형이어야 한다.)

weakMap.set(map, "map");

// Weak형 객체들은 garbage collection의 대상이 된다.
// weakMap, Set에 저장되어 있더라도 다른 참조를 모두 잃으면 garbage collection의 대상이 된다.
// 경우에 따라 cache가 필요한 요소를 처리하는 데에 유용하게 사용할 수 있다.
