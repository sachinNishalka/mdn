const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", () => {
  switch (select.value) {
    case "sunny":
      para.textContent = "Take a cap";
      break;
    case "rainy":
      para.textContent = "Take an umbrella";
      break;
    case "windy":
      para.textContent = "Take a stick";
      break;
    default:
      para.textContent = "";
  }
});
