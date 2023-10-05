function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const outputColor = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  outputColor.textContent = randomColor;

  // Сподіваюся це не буде помилкою)
  btn.style.backgroundColor = randomColor;
  btn.style.border = "none";
});
