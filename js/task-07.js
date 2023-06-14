const rangeInput = document.querySelector('input[type="range"]');
const output = document.querySelector("#text");
rangeInput.addEventListener("input", textSize);
function textSize(evt) {
  const fontSize = evt.currentTarget.value + "px";
  output.style.fontSize = fontSize;
}
