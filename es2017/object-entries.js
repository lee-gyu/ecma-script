const obj = {
  key: 1,
  name: "lee",
  value: 100,
};

for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}
