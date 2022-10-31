const person = {
  name: {
    first: "sachin",
    last: "nishalka",
  },
  age: 23,
};

function sayHello(property, additional) {
  console.log(`Hello your name is ${person[property][additional]}`);
}

sayHello("name", "first");
