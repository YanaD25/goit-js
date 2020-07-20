const validationInputRef = document.querySelector("#validation-input");

const validationEntry = (event) => {
  const dataSet = +validationInputRef.dataset.length;
  if (event.type === "blur") {
    if (dataSet === validationInputRef.value.length) {
      validationInputRef.classList.add("valid");
    } else {
      validationInputRef.classList.add("invalid");
    }
  } else {
    validationInputRef.className = "";
  }
};

validationInputRef.addEventListener("blur", validationEntry);
validationInputRef.addEventListener("focus", validationEntry);
