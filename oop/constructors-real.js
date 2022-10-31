function Person(name) {
  this.name = name;
  this.sayName = function () {
    console.log(`Hello ${this.name}`);
  };
}

const sachin = new Person("sachin");
console.log(sachin.name);
sachin.sayName();

const nishalka = new Person("nishalka");
console.log(nishalka.name);
nishalka.sayName();
