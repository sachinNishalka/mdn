const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

console.log(fetchPromise);
fetchPromise.then((response) => {
  // console.log(`Response : ${response.status}`);
  const responseData = response.json();
  responseData.then((data) => {
    console.log(`The Data ${data[0].name}`);
  });
});

console.log(`Request Started`);
