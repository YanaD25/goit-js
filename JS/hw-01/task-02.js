const total = 100;
const ordered = prompt(`Введите количеcтво нужных  Вам товаров`);

if (ordered === null) {
    console.log (`Отменено пользователем`);
}else if (ordered <= total) {
    console.log (`Заказ оформлен, с вами свяжется менеджер`);
}else if (ordered > total){
    console.log (`На складе недостаточно товаров`);
} 