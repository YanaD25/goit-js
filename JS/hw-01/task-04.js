let credits = 23580;
const pricePerDroid = 3000;
const  howManyDroids = prompt (`Какое количество дроидов Вы желаете приобрести?`)



if(howManyDroids === null) {
    console.log (`Отменено пользователем!`);
}else { 
    const totalPrice = howManyDroids*pricePerDroid;
    if(totalPrice <= credits) {
     console.log (`Вы купили ${howManyDroids} дроидов, на счету осталось ${credits - totalPrice}] кредитов.`);
    } else {
    console.log(`Недостаточно средств на счету!`);
    }
}
