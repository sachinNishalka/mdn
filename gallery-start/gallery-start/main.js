const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
const imageNames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
/* Declaring the alternative text for each image file */
const alternativeText = {
  "pic1.jpg": "eye",
  "pic2.jpg": "sea",
  "pic3.jpg": "flowers",
  "pic4.jpg": "drawing",
  "pic5.jpg": "butterfly",
};
/* Looping through images */

imageNames.map((imgName) => {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `./images/${imgName}`);
  newImage.setAttribute("alt", alternativeText[imgName]);
  thumbBar.appendChild(newImage);
});

// adding images to the main showing area
thumbBar.addEventListener("click", (event) => {
  //   console.log(event.target.src);
  displayedImage.setAttribute("src", `${event.target.src}`);
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
  if (btn.className === "light") {
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    btn.className = "dark";
  } else {
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
    btn.className = "light";
  }
});
