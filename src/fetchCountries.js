export const fetchCountries = (name) => {
  const applicableFields = 'name,capital,population,flag,languages';
  return fetch(`https://restcountries.com/v2/name/${name}?fields=${applicableFields}`);
};

export default fetchCountries;