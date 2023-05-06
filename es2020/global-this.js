// In a browser environment
console.log(globalThis === window); // true

// In a Node.js environment
console.log(globalThis === global); // true

// In a Web Worker environment
console.log(globalThis === self); // true

// 브라우저와 Node.js 환경에서는 globalThis가 window, global과 같은 객체를 참조함.
// Web Worker 환경에서는 self와 같은 객체를 참조함.
// globalThis는 전역 객체를 참조하는 표준 방법이 될 것임.
// 그간 각 환경에 따라 글로벌 객체를 참조하는 방법이 다르기 때문에 이를 통일할 수 있음.
