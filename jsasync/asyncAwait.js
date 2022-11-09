async function gettingData() {
  try {
    // taking the response from the server
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    if (!response.ok) {
      throw new error(`HTTP error ${response.status}`);
    }
    const data = await response.json();
    console.log(`${data[0].name}`);
  } catch (error) {
    console.log(`Could not get products ${error}`);
  }
}

gettingData();
console.log(`The request has started. Please Wait`);
