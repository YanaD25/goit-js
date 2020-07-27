const numberOfCategories = document.querySelectorAll(".item");
console.log(`В списке ${numberOfCategories.length} категории`);

const categorieRef = numberOfCategories.forEach((categories) => {
  console.log(`Категория: ${categories.querySelector("h2").textContent}`);
  console.log(`Количество элементов: ${categories.querySelectorAll("li").length}`);
});
