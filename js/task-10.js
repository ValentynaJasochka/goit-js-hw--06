const inputNumber = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const list = document.querySelector("#boxes");
createBtn.addEventListener("click", takeNumber);
destroyBtn.addEventListener("click", destroyList);

function takeNumber(evt) {
  const value = Number(inputNumber.value);
  createBoxes(value);
}

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const stepSize = 10 * i;
    const div = document.createElement("div");
    div.style.width = `${30 + stepSize}px `;
    div.style.height = `${30 + stepSize}px `;
    div.style.backgroundColor = ` ${getRandomHexColor()}`;
    boxes.push(div);
  }
  list.append(...boxes);
}
function destroyList(evt) {
  list.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
