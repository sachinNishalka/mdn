// const person = {

//   name: ["sachin", "nishalka"],
//   age: 23,
//   //   bio: function () {
//   //     console.log(`Name is ${this.name[0]} ${this.name[1]}. Age is ${this.age}`);
//   //   },
//   bio() {
//     console.log(`Name is ${this.name[0]} ${this.name[1]}. Age is ${this.age}`);
//   },

//   introduce: function () {
//     console.log(`Hello I\`m ${this.name[0]} ${this.name[1]}`);
//   },
// };

const userFname = document.querySelector("#fname");
const userLname = document.querySelector("#lname");
const buttons = document.querySelector("button");
const propertyName = document.querySelector("#propertyName");
const propertyValue = document.querySelector("#propertyValue");
const person = {
  name: {
    fname,
    lname,
  },
  age: null,
};

buttons.addEventListener("click", () => {
  const fname = userFname.value;
  const lname = userLname.value;
  person.name.fname = fname;
  person.name.lname = lname;
  para = document.createElement("p");
  para.textContent = `My Name is ${person.name.fname} ${person.name.lname}`;
  document.body.appendChild(para);
  const pName = propertyName.value;
  const pValue = propertyValue.value;
  person.pName = pValue;
  para2 = document.createElement("p");
  para2.textContent = `My ${pName} is  ${person.pName}`;
  document.body.appendChild(para2);
});
