const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let USER_PASSWORD = prompt ('Введите Ваш пароль');



if (USER_PASSWORD === null) {
    message = 'Отменено пользователем!';
    alert(message);
}else if (USER_PASSWORD === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
    alert (message);
}else {
    message = 'Доступ запрещен, неверный пароль!';
    alert (message);
}
