function createPerson(name) {
  const person = {};
  person.name = name;
  person.sayName = function () {
    console.log(`Hello ${person.name}`);
  };
  return person;
}

const sachin = createPerson("sachin");
const nishalka = createPerson("nishalka");
sachin.sayName();
nishalka.sayName();
