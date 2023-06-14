const userName = document.querySelector("#name-input");
const outPut = document.querySelector("#name-output");
userName.addEventListener("input", onInput);

function onInput(evt) {
  const userName = evt.currentTarget.value.trim();
  if (userName) {
    return (outPut.textContent = userName);
  }
}
