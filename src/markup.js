export const genCountriesList = (countriesInfo) => countriesInfo.reduce((html, countryInfo) => html + `
  <li>
    <div class="flag">
      <img src="${countryInfo.flag}" alt="${countryInfo.name}">
    </div>
    <strong>${countryInfo.name}</strong>
  </li>
`, '');

export const genCountry = (countryInfo) => `
  <div>
    <header title="${countryInfo.name}">
      <div class="flag">
        <img src="${countryInfo.flag}" alt="${countryInfo.name}">
      </div>
      <h2>${countryInfo.name}</h2>
    </header>
    <div>
      <ul>
        <li>
          <span>Capital:</span>
          <span>${countryInfo.capital}</span>
        </li>
        <li>
          <span>Popultaion:</span>
          <span>${countryInfo.population}</span>
        </li>
        <li>
          <span>Languages:</span>
          <span>${countryInfo.languages.map(({ name }) => name).join(', ')}</span>
        </li>
      </ul>
    </div>
  </div>
`;