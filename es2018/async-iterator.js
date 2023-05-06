// for await
async function* asyncGenerator() {
  yield* [1, 2, 3];
}

async function func() {
  for await (const value of asyncGenerator()) {
    console.log(value);
  }
}

func();
