const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

message = prompt ('Введите Ваш пароль');

if (message === null) {
    console.log (`Отменено пользователем!`);
}else if (message === ADMIN_PASSWORD) {
    console.log (`Добро пожаловать!`);
    alert (message);
}else if (message !== ADMIN_PASSWORD) {
    console.log (`Доступ запрещен, неверный пароль!`);
    alert (message);
}


