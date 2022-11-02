const person = {
  name: "sachin",
  greet() {
    console.log(`Hello ${this.name}`);
  },
};

console.log(person);
// console.log(Object.getPrototypeOf(person));
