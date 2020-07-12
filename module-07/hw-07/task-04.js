const counter = document.querySelector("#value");

const funcDecrement = document.querySelector('button[data-action="decrement"]');
const funcIncrement = document.querySelector('button[data-action="increment"]');

let counterValue = +counter.textContent;

const funcCalculate = (event) => {
  if (event.target.dataset.action === "increment") {
    counterValue += 1;
    counter.textContent = counterValue;
  } else {
    counterValue -= 1;
    counter.textContent = counterValue;
  }
};
funcDecrement.addEventListener("click", funcCalculate);
funcIncrement.addEventListener("click", funcCalculate);
