const obj = {
  key: 1,
  name: "lee",
  value: 100,
};

// Proxy
// Proxy는 객체의 기본적인 동작(속성 접근, 할당, 순회, 함수 호출 등)을 가로채서
// 특정한 동작을 수행하도록 하는 객체입니다.
// Proxy는 ES6에서 새롭게 추가된 기능으로, ES5에서는 Object.defineProperty를 이용하여
// 객체의 속성에 접근할 때 특정한 동작을 수행하도록 할 수 있었습니다.
// 하지만 Object.defineProperty는 속성에 접근할 때마다 함수를 호출해야 하기 때문에
// 성능이 좋지 않았습니다.
// Proxy는 이러한 단점을 보완하고자 ES6에서 추가된 기능입니다.
// Proxy는 다음과 같이 사용할 수 있습니다.
const proxy = new Proxy(obj, {
  get(target, prop) {
    console.log(`get proxy! ${prop}`);
    return target[prop];
  },
});

// proxy를 이용하여, 직접적인 접근이 아닌 proxy를 통해 접근하도록 함.
// 아래 코드는 name 참조 시, proxy의 get 함수가 호출됨.
console.log(proxy.name);

// proxy를 응용하여 아래 것들을 처리할 수 있음.
// 객체 참조에 대한 유효성 검사 및 접근 제어
// 객체 참조에 대한 추가적인 동작 수행 (로깅, 프로파일링)
// 가상화된 객체를 만들어서 사용 (가상화된 객체는 실제 객체와는 다른 동작을 수행할 수 있음)
// 데이터 바인딩 (데이터의 변경을 감지하여 자동으로 업데이트)
// 개발자가 어떻게 사용할지에 따라서 다양한 방법으로 활용할 수 있습니다.
