const button = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");
function displayVideo() {
  if (box.getAttribute("class") === "hidden") {
    box.setAttribute("class", "showing");
  }
}

button.addEventListener("click", displayVideo);
video.addEventListener("click", (e) => {
  e.stopPropagation();
  video.play();
});

box.addEventListener("click", () => {
  box.setAttribute("class", "hidden");
});
