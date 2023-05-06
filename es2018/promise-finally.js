Promise.resolve(1)
  .then((data) => {
    console.log(1, data);

    return data + 1;
  })
  .then((data) => {
    console.log(2, data);

    return data;
  })
  .finally(() => console.log("finally"));
