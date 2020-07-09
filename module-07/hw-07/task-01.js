const numberOfCategories = document.querySelectorAll(".item");
console.log(`В списке ${numberOfCategories.length} категории`);

const categorieRef = numberOfCategories.forEach((categories) => {
  const name = categories.querySelector("h2");
  console.log(`Категория: ${name.textContent}`);
  const quantity = categories.querySelectorAll("li");
  console.log(`Количество элементов: ${quantity.length}`);
});
