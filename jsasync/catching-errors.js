const theURL =
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
const promiseObject = fetch(theURL);

promiseObject
  .then((responseObject) => {
    if (!responseObject.ok) {
      throw new Error(`Response Object ${responseObject.status}`);
    } else {
      return responseObject.json();
    }
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.log(`The object is not here ${error}`);
  });
