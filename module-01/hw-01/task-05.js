const country = prompt (`Укажите название Вашей страны для доставки товара`);

if (country === null) {
    console.log('Отменено пользователем!');
} else { 
    switch (country.toLowerCase()) {
    case 'китай':
    console.log (`Доставка в ${country} будет стоить 100 кредитов`);
    break;

    case 'чили':
    console.log (`Доставка в ${country} будет стоить 250 кредитов`);
    break;

    case 'австралия':
    console.log (`Доставка в ${country} будет стоить 170 кредитов`);
    break;

    case 'индия':
    console.log (`Доставка в ${country} будет стоить 80 кредитов`);
    break;

    case 'ямайка':
    console.log (`Доставка в ${country} будет стоить 120 кредитов`);
    break;

    default: 
    alert('В Вашей стране доставка не доступна');
    break;
}
}