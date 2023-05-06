function foo() {
  return 1;
}

// function의 toString() 메서드를 호출하면 함수의 소스코드를 문자열로 반환함.
// 실행되었을 때의 환경에 따라 whitespace, comment 등이 다를 수 있음.
console.log(foo.toString());
