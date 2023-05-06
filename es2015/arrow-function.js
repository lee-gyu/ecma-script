// this는 항상, 어휘 맥락에 있는 this가 바인딩 된다.
const obj = {
  name: "Dog",
  func() {
    const func = () => this.name;

    return func();
  },
};

// 현재 어휘 맥락에 있는 것으로 고정됨
const func = () => this.name;

console.log(obj.func());
console.log(func());

// object를 바인딩하여도 arrow function은 어휘 맥락에 있는 this를 바인딩한다.
console.log(func.call(obj));
