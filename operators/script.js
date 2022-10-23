const button = document.querySelector("button");
const p = document.querySelector("p");
p.textContent = "Machine Stopped";
button.addEventListener("click", () => {
  if (button.textContent === "Start The Machine") {
    p.textContent = "Machine Started";
    button.textContent = "Stop The Machine";
  } else {
    p.textContent = "Machine Stopped";
    button.textContent = "Start The Machine";
  }
});
