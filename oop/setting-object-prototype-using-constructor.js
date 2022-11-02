const thePrototypeObject = {
  greet() {
    console.log(`This is comming from prototype function ${this.name}`);
  },
};

// separate function
function Person(name) {
  // the properties that are own by the constructor function
  this.name = name;
}

Object.assign(Person.prototype, thePrototypeObject);

const sachin = new Person("sachin");
// console.log(Object.getPrototypeOf(sachin));
console.log(sachin.greet());

// checking whether an object owns a property
console.log(Object.hasOwn(sachin, "name"));

// usually the functions for every object is stored in the prototypes
