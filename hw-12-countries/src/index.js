import  './styles.css';
import  fetchCountries from './js/fetchCountries';
import refs from './js/refs';
import countryMarkup  from'./js/markup';
import resultCountryList from './templates/resultCountryList.hbs';
import resultOneCountry from './templates/resultOneCountry.hbs';
import warning from './templates/warning.hbs';
import debounce from 'lodash.debounce';
// const debounce = require('lodash.debounce');


function templateOfCountries(countries) {
  if (countries.length === 1) {
    return countryMarkup(countries, resultOneCountry);
  } else if (countries.length > 1 && countries.length <= 10) {
    return countryMarkup(countries, resultCountryList);
  } else if (countries.length > 10) {
    return countryMarkup(countries, warning);
  }
}

refs.searchForm.addEventListener(
  'input',
  debounce(e => {
    refs.countryList.innerHTML = '';
    fetchCountries(e.target.value).then(country => {
      templateOfCountries(country);
    });
   
  }, 500),
);






