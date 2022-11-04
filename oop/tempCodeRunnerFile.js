// inheritance means that
// a school has people
// teachers and students
// both teachers and students have common and different characteristics

// class professor
//     properties
//         name
//         teaches
//     constuctor
//         Professor(name, teaches)
//     methods
//         grade(paper)
//         introduceself()
// class student
//     properties
//         name
//         year
//     constuctor
//         Student(name, year)
//     methods
//
//         introduceself()

// using the inheritance
// class person
//     properties
//         name
//     constructor
//         Person(name)
//     methods
//         introduceself()
// class Professor : extends Person
//     properties
//
//         teaches
//     constuctor
//         Professor(name,teaches)
//     methods
//         grade(paper)
// class student : extends Person
//     properties
//
//         year
//     constuctor
//         Student(name, year)
//     methods
//
//         introduceself()

// creating the class and making an instance

class Person {
  name;
  constructor(name) {
    this.name = name;
  }
  introduceSelf() {
    console.log(`Hello this name from the class ${this.name}`);
  }
}

const sachin = new Person("sachin");
sachin.introduceSelf();

// ommiting the consctor
class animal {
  sleep() {
    console.log(`This is a good place to sleep`);
  }
}
const dog = new animal();
dog.sleep();

// inheritance
class professor extends Person {
  teaches;
  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }
  introduceSelf() {
    console.log(
      `This comes from the teacher and name is ${this.name} and teaches ${this.teaches}`
    );
  }
  grade() {
    const grade = 40;
    console.log(grade);
  }
}

const nishalka = new professor("nishalka", "programming");
nishalka.introduceSelf();

// encapsulation
class student extends Person {
  #year;
  constructor(name, year) {
    super(name);
    this.#year = year;
  }
  introduceSelf() {
    console.log(`This is a student ${this.name} and year is ${this.#year}`);
  }
  canStudyArchery() {
    return this.#year > 1;
  }
}

const fernando = new student("sachin", 17);
fernando.introduceSelf();
fernando.canStudyArchery();

// private methods
class example1 {
  somemethod() {
    this.#someprivatemethod();
  }
  #someprivatemethod() {
    console.log("You are private");
  }
}

const example = new example1();
example.somemethod();
