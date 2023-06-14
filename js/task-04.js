const eventRemove = document.querySelector('button[data-action="decrement"]');
const eventAdd = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector("#value");
eventAdd.addEventListener("click", onClickAdd);
eventRemove.addEventListener("click", onClickRemove);

function onClickAdd(event) {
  const btn = event.currentTarget;
  let add = Number(btn.textContent);
  return (counterValue.textContent = Number(counterValue.textContent) + add);
}
function onClickRemove(evt) {
  const btn = evt.currentTarget;
  let remove = Number(btn.textContent);
  return (counterValue.textContent = Number(counterValue.textContent) + remove);
}
