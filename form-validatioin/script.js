const form = document.querySelector("form");
const button = document.querySelector("button");
const userName = document.querySelector("#userName");
const password = document.querySelector("#password");
const p = document.querySelector("p");
form.addEventListener("submit", (e) => {
  if (userName.value === "" || password.value === "") {
    e.preventDefault();
    p.textContent = "The required field is missing";
  } else {
    p.textContent = "";
  }
});
