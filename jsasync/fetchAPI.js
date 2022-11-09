const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

console.log(fetchPromise);

// fetchPromise {
// then(someFunction){
//     returning result;
//      someFunction(reult)
// }
// }
// somefunction(response){
// code block
// }
// promise object -> response object -> response object json object / format
// json object -> real object

// fetchPromise.then((theResponse) => {
//   theJSONobject = theResponse.json();
//   theJSONobject.then((realResult) => {
//     console.log(realResult[0].name);
//   });
// });
console.log("Started the request");
// promise chaining

// fetchPromise
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data[0]);
//   });

fetchPromise
  .then((response) => {
    if (!response.ok) {
      console.log(`The response error ${response.status}`);
    } else {
      return response.json();
    }
  })
  .then((data) => {
    console.log(data[0].name);
  });
