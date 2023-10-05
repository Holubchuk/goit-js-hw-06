const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

ingredients.forEach((item) => {
  const tag = document.createElement("li");
  tag.classList.add("item");
  tag.textContent = item;
  list.append(tag);
});
