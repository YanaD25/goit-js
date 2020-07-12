const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

const nameEntry = () => {
  if (inputRef.value === '') {
    outputRef.textContent = 'незнакомец';
  } else {
    outputRef.textContent = inputRef.value;
  }
};

inputRef.addEventListener("input", nameEntry);
