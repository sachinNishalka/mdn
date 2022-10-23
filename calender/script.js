const select = document.querySelector("select");
const ul = document.querySelector("ul");

function addDays(number) {
  const li = document.createElement("li");
  li.textContent = number;
  ul.appendChild(li);
}

select.addEventListener("change", () => {
  ul.innerHTML = "";
  if (
    select.value === "january" ||
    select.value === "march" ||
    select.value === "may" ||
    select.value === "july" ||
    select.value === "september" ||
    select.value === "november" ||
    select.value === "december"
  ) {
    for (let i = 1; i <= 31; i++) {
      addDays(i);
    }
  } else if (select.value === "february") {
    for (let i = 1; i <= 29; i++) {
      addDays(i);
    }
  } else if (
    select.value === "april" ||
    select.value === "june" ||
    select.value === "august" ||
    select.value === "october"
  ) {
    for (let i = 1; i <= 30; i++) {
      addDays(i);
    }
  } else {
    ul.innerHTML = "";
  }
});
