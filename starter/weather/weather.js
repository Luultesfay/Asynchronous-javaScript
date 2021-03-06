'use strict';
const btns = document.querySelector('.btn-country');
const countriesContainers = document.querySelector('.countries');

const renderCountries = function (data, className = '') {
  const html = `<article class="country ${className} ">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>🌆</span>${data.capital}
   
  </p>

  <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
    1
  )} million people</p>
    <p class="country__row"><span>🗣️</span>${data.languages.name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    
  </div>
</article>`;

  countriesContainers.insertAdjacentHTML('beforeend', html);
  //countriesContainers.style.opacity = 1;
};
const renderCountriesWeather = function (data) {
  const html = `<article class="countryW ">

    <p class="country__row_weather"><span>🌧️</span>   ${data.hourly.temperature_2m[0]}
     degree farhanite </p>

  </article>`;

  countriesContainers.insertAdjacentHTML('afterend', html);
  //countriesContainers.style.opacity = 1;
};

const weatherss = function (latt, long) {
  fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latt}&longitude=${long}&hourly=temperature_2m&temperature_unit=fahrenheit`
  )
    .then(Response => Response.json())
    .then(data => {
      console.log(data);
      console.log(data.hourly.temperature_2m[0]);

      renderCountriesWeather(data);
      return fetch(`https://geocode.xyz/${latt},${long}?geoit=json`);
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const country = data.country;
      console.log(country);
      if (!country) return;
      return fetch(`https://restcountries.com/v2/name/${country}`)
        .then(response => response.json())
        .then(data => {
          renderCountries(data[0]);
          console.log(data[0]);

          const neighbour = data[0].borders[0];
          console.log(neighbour);
          //console.log(data.hourly.temperature_2m[0]);
          if (!neighbour) return;
          return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
        })
        .then(response => response.json())
        .then(data => {
          renderCountries(data, 'neighbour');
          console.log(data);
        })
        .catch(err => {
          console.error(`${err} 💥💥💥`);
        })
        .finally(() => {
          countriesContainers.style.opacity = 1;
        });
    });
};

btns.addEventListener('click', function () {
  //weatherss(52.508, 13.381);
  weatherss(41.878113, -87.629799);
});
