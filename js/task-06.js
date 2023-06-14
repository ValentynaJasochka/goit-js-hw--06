const input = document.querySelector("#validation-input");
const length = document.querySelector('input[data-length="6"]');
const textLength = Number(length.dataset.length);
input.addEventListener("blur", lengthCheck);

function lengthCheck(evt) {
  const text = evt.currentTarget.value.trim();
  if (text.length !== textLength) {
    if (input.classList.contains("valid")) {
      input.classList.replace("valid", "invalid");
    } else {
      input.classList.add("invalid");
    }
  } else {
    if (input.classList.contains("invalid")) {
      input.classList.replace("invalid", "valid");
    } else {
      input.classList.add("valid");
    }
  }
}
