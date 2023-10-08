const items = document.querySelector("#categories");
const children = items.children;

console.log(`Number of categories: ${children.length}`);

[...children].forEach((child) => {
  const title = child.firstElementChild.textContent;
  const ul = child.lastElementChild;
  const count = ul.children.length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${count}`);
});
