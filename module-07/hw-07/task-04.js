const valueRef = document.querySelector("#value");
const counter = document.querySelector("#counter");

let counterValue = +valueRef.textContent;

const funcCalculate = (event) => {
  valueRef.textContent =
    event.target.dataset.action === "increment"
      ? ++counterValue
      : --counterValue;
};

counter.addEventListener("click", funcCalculate);

