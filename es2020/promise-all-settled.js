// 하나가 오류더라도, 모든 Promise가 처리될 때까지 기다린다.
// Promise.all의 경우는 하나라도 오류가 나면 바로 오류를 반환한다.
const promise1 = Promise.resolve(1);
const promise2 = Promise.reject(new Error("Failed!"));

Promise.allSettled([promise1, promise2]).then((results) => {
  console.log(results);
  // [
  //   { status: "fulfilled", value: 1 },
  //   { status: "rejected", reason: Error: "Failed!" }
  // ]
});
