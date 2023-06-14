const text = document.querySelector("body");
const colorName = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
changeColorBtn.addEventListener("click", changeColor);
function changeColor(evt) {
  text.style.backgroundColor = getRandomHexColor();
  colorName.textContent = `${getRandomHexColor()}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
