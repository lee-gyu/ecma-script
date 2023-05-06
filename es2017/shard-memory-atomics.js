/**
 * Shared memory and atomics
 *
 * @see
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics
 */

// SharedArrayBuffer
// 자바스크립트의 배열은 메모리를 공유하지 않는다.
// 하지만 SharedArrayBuffer는 메모리를 공유한다.
// SharedArrayBuffer는 ArrayBuffer와 비슷하지만, ArrayBuffer는 메모리를 공유하지 않는다.
// 각 쓰레드에서 공유할 수 있는 메모리를 제공한다.
// 다중 쓰레드를 쓰는 환경에서 사용하므로, 주로 웹 워커에서 사용한다.
// 성능이 굉장히 중요한 부분인, 게임이나 렌더링 엔진에서 사용한다.
// 쓰레드가 효율적으로 공유된 메모리를 사용할 수 있도록 해준다.

const arrayBuffer = new SharedArrayBuffer(1024);

const sharedBuffer = new SharedArrayBuffer(16);
const sharedArray = new Int32Array(sharedBuffer);

// Atomically store the value 42 at index 0 in the sharedArray
Atomics.store(sharedArray, 0, 42);

// Atomically load the value at index 0 in the sharedArray
console.log(Atomics.load(sharedArray, 0)); // 42
