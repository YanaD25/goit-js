let price;
let country = prompt (`Укажите название Вашей страны для доставки товара`);


switch(country.toLowerCase()) {
    case 'китай':
    price = 100;
    console.log (`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

    case 'чили':
    price = 250;
    console.log (`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

    case 'австралия':
    price = 170;
    console.log (`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

    case 'индия':
    price = 80;
    console.log (`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

    case 'ямайка':
    price = 120;
    console.log (`Доставка в ${country} будет стоить ${price} кредитов`);
    break;

    default: 
    alert('В Вашей стране доставка не доступна')
}
