// creating the prototype
const newPrototype = {
  greet() {
    console.log("Hello from newPrototype");
  },
};

const sachin = {
  name: "sachin",
  age: 23,
};

const nishalka = Object.create(newPrototype);
console.log(Object.getPrototypeOf(nishalka));
