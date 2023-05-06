const arr = [1, 2, 3, 4, 5, { name: 1 }];

// 얕은 비교로 존재하는지 검사함

console.log(arr.includes(1));
console.log(arr.includes(arr[5]));

// 오브젝트 내부 내용이 같아도 다른 오브젝트로 인식함. (실제 참조 주소가 다름)
console.log(arr.includes({ name: 1 }));
