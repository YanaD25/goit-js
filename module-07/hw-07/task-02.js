const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const ingredItem = document.createElement("li");
  ingredItem.textContent = ingredient;
  ingredientsList.appendChild(ingredItem);
});
console.log(ingredientsList);
