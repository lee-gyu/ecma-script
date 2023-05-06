// 객체가 gc에 의해 수거 되어도 상관 없는 경우에만 사용하는 참조법
// 아마, 여러 클로저 사용으로 인해 메모리 관리가 중요시 되는 환경에서 쓸 듯.
const arr = [1, 2, 3, 4];
const arrRef = new WeakRef(arr);
