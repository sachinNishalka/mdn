async function populate() {
  // the url will store the url
  const theurl =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

  // the request will create a new request object
  const request = new Request(theurl);
  // this will do the data fetching part
  const response = await fetch(request);
  //   the response will store in the response variable

  //   the above lines will fetch the data from the server

  const superHeros = await response.json();

  populateHeader(superHeros);
  populateHeader(superHeros);
}

function populateHeader(obj) {
  const header = document.querySelector("header");
  const myH1 = document.createElement("h1");
  myH1.textContent = obj.squadName;

  const myPara = document.createElement("p");
  myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed} `;
  header.appendChild(myPara);
}

function populateHeros() {
  const section = document.querySelector("section");
  const heros = obj.members;

  for (const hero of heros) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret Identity ${hero.secretIdentity}`;
    myPara2.textContent = `Age ${hero.age}`;
    myPara3.textContent = `Superpowers:`;

    const superPowers = hero.powers;
    for (const power of superPowers) {
      const listItem = document.createElement("li");
      listItem.textContent = power;
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
