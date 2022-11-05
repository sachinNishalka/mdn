// taking the data from the server
async function takeData() {
  // adding the url to a variable
  const url =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  // to make a request you need the url
  const request = new Request(url);
  //   grab the response and send it to the console
  //   fetching the request and taking the response
  const response = await fetch(request);
  const theData = await response.json();
  console.log(theData);
  topBanner(theData);
  heroDetails(theData);
}
takeData();

// creating the top banner
function topBanner(theObject) {
  const theHeading = document.querySelector("header");
  const heading = document.createElement("h1");
  heading.innerText = `${theObject.squadName}`;
  theHeading.appendChild(heading);
  const para = document.createElement("p");
  para.innerText = `Hometown : ${theObject.homeTown} - Formed : ${theObject.formed}`;
  theHeading.appendChild(para);
}

// creating the content
function heroDetails(theObject) {
  // targeting the section
  const theSection = document.querySelector("section");

  // selecting the members
  const theMemebers = theObject.members;
  console.log(theMemebers);

  // using the map method
  theMemebers.map((member) => {
    const simpleHeading = document.createElement("h2");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");
    const para4 = document.createElement("p");

    simpleHeading.textContent = `Team ${member.name}`;
    para1.textContent = `Name : ${member.name}`;
    para2.textContent = `Age : ${member.age}`;
    para3.textContent = `Secret Identity : ${member.secretIdentity} `;
    const powers = member.powers;
    powers.map((thepower) => {
      console.log(thepower);
      para4.textContent += `Powers : ${thepower} `;
    });
    theSection.appendChild(simpleHeading);
    theSection.appendChild(para1);
    theSection.appendChild(para2);
    theSection.appendChild(para3);
    theSection.appendChild(para4);
    console.log(member.name);
    // simpleHeading.innerText = "hello";
    // theSection.appendChild(simpleHeading);
  });

  // using the for of method
  // for (member of theMemebers) {
  //   console.log(member);
  //   const simpleHeading = document.createElement("h2");
  //   simpleHeading.innerText = `${member.name}`;
  //   theSection.appendChild(simpleHeading);
  // }
}
