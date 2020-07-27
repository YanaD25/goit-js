const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

const nameEntry = () => {
  inputRef.value === ""
    ? (outputRef.textContent = "незнакомец")
    : (outputRef.textContent = inputRef.value);
};

inputRef.addEventListener("input", nameEntry);
