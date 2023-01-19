import _ from 'lodash';
import './css/styles.css';
import { fetchCountries } from './fetchCountries';

const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

input.addEventListener('input', eventHandler);

function eventHandler(event) {
  const name = event.currentTarget.value;
  console.log(name);
  fetchCountries(name);
}

// function eventHandler() {
//   countryList.setAttribute('li', name);
//   countryList.textContent = fetchCountries.currentTarget.value;
// }

// function renderCountry(el) {
//   const country = el;
// }
