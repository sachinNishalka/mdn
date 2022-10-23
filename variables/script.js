const button = document.querySelector("button");
const h3 = document.querySelector("h3");

button.addEventListener("click", () => {
  let name = prompt("Enter your Name");
  h3.textContent = `Welcome ${name}`;
});
