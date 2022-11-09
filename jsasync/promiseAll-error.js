const url1 =
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
const url2 =
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found";
const url3 =
  "bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const fetchedPromise1 = fetch(url1);
const fetchedPromise2 = fetch(url2);
const fetchedPromise3 = fetch(url3);

Promise.all([fetchedPromise1, fetchedPromise2, fetchedPromise3])
  .then((responses) => {
    for (response of responses) {
      console.log(response.url);
    }
  })
  .catch((error) => {
    console.log(`The error ${error}`);
  });
