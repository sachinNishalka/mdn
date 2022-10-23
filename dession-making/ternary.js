const select = document.querySelector("select");
function changeTheme(backColor, fontColor) {
  document.body.style.backgroundColor = backColor;
  document.body.style.color = fontColor;
}
select.addEventListener("change", () => {
  select.value === "light"
    ? changeTheme("white", "black")
    : changeTheme("black", "white");
});
