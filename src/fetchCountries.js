//funkcja

export function fetchCountries(name) {
  fetch(
    'https://restcountries.com/v3.1/all?fields=name,capital,population,flags,languages'
  )
    .then(res => res.json())
    .then(res => {
      const countryMap = res.map(res => res.name);
      const countryFilter = countryMap.filter(el =>
        el['common'].toLowerCase().includes(name.toLowerCase())
      );
      console.log(countryFilter);
    })
    .catch(err => console.log('error', err));
}
