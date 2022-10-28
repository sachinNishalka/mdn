const body = document.querySelector("body");
const div = document.querySelector("div");
const button = document.querySelector("button");
const p = document.querySelector("pre");
function clicking(e) {
  p.textContent += `${e.currentTarget.tagName} \n`;
}

button.addEventListener("click", clicking);
div.addEventListener("click", clicking);
body.addEventListener("click", clicking);
