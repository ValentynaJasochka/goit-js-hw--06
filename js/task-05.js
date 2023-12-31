const userName = document.querySelector("#name-input");
const outPut = document.querySelector("#name-output");
const firstOutPut = outPut.textContent;
userName.addEventListener("input", onInput);

function onInput(evt) {
  const userName = evt.currentTarget.value.trim();
  if (!userName) {
    outPut.textContent = firstOutPut;
  } else {
    outPut.textContent = userName;
  }
}
