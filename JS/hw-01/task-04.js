let credits = 23580;
const pricePerDroid = 3000;
let  howManyDroids = prompt (`Какое количество дроидов Вы желаете приобрести?`)
let totalPrice;


if(howManyDroids === null) {
    console.log (`Отменено пользователем!`);
}else { 
    totalPrice = howManyDroids*pricePerDroid;
    if(totalPrice <= credits) {
    credits = credits - totalPrice;
    console.log (`Вы купили ${howManyDroids} дроидов, на счету осталось ${credits}] кредитов.`);
    } else {
    console.log(`Недостаточно средств на счету!`);
    }
}
