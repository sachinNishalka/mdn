const p = document.querySelector("p");
p.addEventListener("click", sayHello);
function sayHello() {
  let name = prompt("Enter your name");
  alert(`Hello ${name}`);
}
