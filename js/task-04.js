let counterValue = 0;

const elementValue = document.querySelector("#value");
const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  elementValue.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  elementValue.textContent = counterValue;
});
