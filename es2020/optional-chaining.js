const person = {
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "New York",
  },
};

const street = person?.address?.street;
console.log(street); // "123 Main St"

const invalidProperty = person?.nonexistentProperty?.property;
console.log(invalidProperty); // undefined
