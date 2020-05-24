let input;
let total = 0;

do {
    input = prompt('Введите число в поле для ввода');
    if (Number.isNaN(+input)) {
        alert(`Было введено не число, попробуйте еще раз`);
        continue;
    }
   
    total += +input;
}while (input !== null)

console.log(`Общая сумма чисел равна ${total}`)

    
