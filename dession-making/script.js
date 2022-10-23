const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", () => {
  if (select.value === "sunny") {
    para.textContent = "Take a cap";
  } else if (select.value === "rainy") {
    para.textContent = "Take a umbrella";
  } else if (select.value === "windy") {
    para.textContent = "Take a cane";
  }
});
