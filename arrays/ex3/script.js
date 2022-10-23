const button = document.querySelector("button");
const input = document.querySelector("#input");
const uk = document.querySelector("#uk");
const us = document.querySelector("#us");
const para = document.querySelector("p");
let theStory = "";
button.addEventListener("click", () => {
  if (uk.checked) {
    if (input.value == "") {
      para.textContent = `The name is default and the country is uk`;
    } else {
      para.textContent = `The name is ${input.value} and the country is uk`;
    }
  } else {
    if (input.value === "") {
      para.textContent = `The name is default and the country is us`;
    } else {
      para.textContent = `The name is ${input.value} and the country is us`;
    }
  }
});
