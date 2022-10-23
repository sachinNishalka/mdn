const products = [
  "Underpants:6.99",
  "Socks:5.99",
  "T-shirt:14.99",
  "Trousers:31.99",
  "Shoes:23.99",
];
// console.log(products);
let total = 0;
const itemList = [];
const itemNames = [];
const itemPrices = [];
products.map((item) => {
  itemList.push(item.split(":"));
});

console.log(itemList[0]);

itemList.map((eachItem) => {
  itemNames.push(eachItem[0]);
  itemPrices.push(Number(eachItem[1]));
});

console.log(itemNames);
console.log(itemPrices);

itemPrices.map((price) => {
  total += price;
});
console.log(`Total ${Math.round(total)}`);

// for (let i = 0; itemList.length; i++) {
//   console.log(`${itemNames[i]} - ${itemPrices[i]}`);
// }

for (let i = 0; i < itemNames.length; i++) {
  console.log(`${itemNames[i]} - ${itemPrices[i]}`);
}
