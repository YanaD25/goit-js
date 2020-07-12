const validationInputRef = document.querySelector("#validation-input");

const dataSet = +validationInputRef.dataset.length;

const validationEntry = () => {
  if (dataSet === validationInputRef.value.length) {
    validationInputRef.classList.add("valid");
  } else {
    validationInputRef.classList.add("invalid");
  }
};

validationInputRef.addEventListener("blur", validationEntry);
