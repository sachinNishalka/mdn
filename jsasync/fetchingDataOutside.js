async function getData() {
  try {
    const theURL =
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
    const response = await fetch(theURL);
    if (!response.ok) {
      console.log(`There is an error ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.log(`${error}`);
  }
}

const theJSONobject = getData();
theJSONobject.then((data) => {
  console.log(data[0].name);
});
