const input = document.querySelector("input");
const ul = document.querySelector("ul");
function something(event) {
  console.log(event);
  li = document.createElement("li");
  li.textContent = `You pressed ${event.key}`;
  ul.appendChild(li);
}

input.addEventListener("keydown", something);
