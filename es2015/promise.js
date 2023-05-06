Promise.resolve(1).then((data) => {
  console.log(data);
});

console.log("start");

setTimeout(() => {
  console.log("end");
}, 0);
