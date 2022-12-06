import { debounce } from 'lodash';
import Notiflix from 'notiflix';

import fetchCountries from './fetchCountries';
import { genCountry, genCountriesList } from './markup';

import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const MAX_COUNTRIES_LEN = 10;

const searchInput = document.querySelector('input#search-box');
const countryList = document.querySelector('ul.country-list');
const countryInfo = document.querySelector('div.country-info');

const clearFields = () => {
  countryInfo.innerHTML = '';
  countryList.innerHTML = '';
};

const notifyUser = (type, msg) => {
  Notiflix.Notify[type](msg, { timeout: 6000 });
};

const onSearch = debounce(async ({ target: { value: countryName } }) => {
  clearFields();

  if (!countryName) return;

  const response = await fetchCountries(countryName);
  const countriesInfo = await response.json();
  
  if (response.status === 404) return notifyUser('failure', 'Oops, there is no country with that name');
  if (countriesInfo.length > MAX_COUNTRIES_LEN) return notifyUser('info', 'Too many matches found. Please enter a more specific name.');
  
  if (countriesInfo.length === 1) {
    countryInfo.innerHTML = genCountry(countriesInfo[0]);
  } else {
    countryList.innerHTML = genCountriesList(countriesInfo);
  }
}, DEBOUNCE_DELAY);

searchInput.addEventListener('input', onSearch);

