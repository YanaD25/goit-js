import menuItem from './../template/menu.hbs';
import menu from './../menu.json';
const dish = menuItem(menu);
const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentElement('beforeend', menu);
