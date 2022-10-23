const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

const searchList = [];

button.addEventListener("click", () => {
  ul.innerHTML = "";
  if (searchList.length <= 4) {
    searchList.unshift(input.value);
  } else {
    searchList.pop();
    searchList.unshift(input.value);
  }
  searchList.map((item) => {
    addItem(item);
  });
  input.focus();
});

function addItem(itemName) {
  li = document.createElement("li");
  li.textContent = `${itemName}`;
  ul.appendChild(li);
}
