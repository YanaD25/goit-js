  
import refs from './refs';

const countryMarkup = function (country, template) {
    const markup = template(country);
    refs.countryList.insertAdjacentHTML('beforeend', markup)
}
export default countryMarkup;