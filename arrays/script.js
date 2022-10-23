function double(number) {
  p = document.createElement("p");
  number = number * 2;
  p.textContent = number;
  document.body.appendChild(p);
  return number;
}

const numberList = [1, 2, 3, 4, 5];

const filterArray = numberList.map(double);
console.log(filterArray.filter(fil));

function fil(number) {
  if (number > 5) {
    return number;
  }
}
