let input;
let total = 0;

while (true) {
    let inputNumber = prompt('Введите числов в поле для ввода');
    
    if (inputNumber === null) {
        break;
    }

    inputNumber = Number(inputNumber);
    const isNumber = Number.isNaN(inputNumber)
    if (isNumber === true) {
        continue;
    }
    total += inputNumber;
}
console.log(`Общая сумма чисел равна ${total}`)

