'use strict';

/*PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
and a longitude value ('lng') (these are GPS coordinates, examples are in test
data below).
2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
to convert coordinates to a meaningful location, like a city and country name.
Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call
will be done to a URL with this format:
https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and
promises to get the data. Do not use the 'getJSON' function we created, that
is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes
that you received about the provided location. Then, using this data, log a
message like this to the console: “You are in Berlin, Germany”
4. Chain a .catch method to the end of the promise chain and log errors to the
console
5. This API allows you to make only 3 requests per second. If you reload fast, you
will get this error with code 403. This is an error with the request. Remember,
fetch() does not reject the promise in this case. So create an error to reject
the promise yourself, with a meaningful error message
PART 2
6. Now it's time to use the received data to render a country. So take the relevant
attribute from the geocoding API result, and plug it into the countries API that
we have been using.
7. Render the country and catch any errors, just like we have done in the last
lecture (you can even copy this code, no need to type the same code)*/

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

// const whereIAm = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => response.json())
//     .then(data => {
//       //console.log(data);
//       //renderCountries(data);
//       const country = data.country;
//       //console.log(country);

//       //we can inject the country
//       //console.log(typeof data);
//       console.log(`you are in ${data.country}`);

//       if (!country) return;
//       return fetch(`https://restcountries.com/v2/name/${country}`);
//     })
//     .then(response => response.json())
//     .then(data => {
//       renderCountries(data[0]);
//       //console.log(data[0]);

//       const neighbour = data[0].borders[0];
//       console.log(neighbour);
//       if (!neighbour) return;
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => {
//       renderCountries(data, 'neighbour');
//       //console.log(data);
//     })
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//     })
//     .finally(() => {
//       countriesContainers.style.opacity = 1;
//     });
// };
// btns.addEventListener('click', function () {
//   //whereIAm(52.508, 13.381);
//   //whereIAm(19.037, 72.873);
//   whereIAm(-33.933, 18.474);
// });

///promisfying the above code according our location

let getPositions = new Promise(function (resolve, reject) {
  navigator.geolocation.getCurrentPosition(resolve, reject);
});
//getPositons.then(pos => console.log(pos)); //we get the current location from the browser

const whereIAm = function () {
  getPositions
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      console.log(pos);
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })

    .then(response => response.json())
    .then(data => {
      //console.log(data);
      //renderCountries(data);
      const country = data.country;
      //console.log(country);

      //we can inject the country
      //console.log(typeof data);
      console.log(`you are in ${data.country}`);

      if (!country) return;
      return fetch(`https://restcountries.com/v2/name/${country}`);
    })
    .then(response => response.json())
    .then(data => {
      renderCountries(data[0]);
      //console.log(data[0]);

      const neighbour = data[0].borders[0];
      console.log(neighbour);
      if (!neighbour) return;
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => {
      renderCountries(data, 'neighbour');
      //console.log(data);
    })
    .catch(err => {
      console.error(`${err} 💥💥💥`);
    })
    .finally(() => {
      countriesContainers.style.opacity = 1;
    });
};
btns.addEventListener('click', whereIAm);

//we copying it from the script.js to use it for the code below
const waits = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, sec * 1000);
  });
};

////////challenge 2

/*PART 1
1. Create a function 'createImage' which receives 'imgPath' as an input.
This function returns a promise which creates a new image (use
document.createElement('img')) and sets the .src attribute to the
provided image path
2. When the image is done loading, append it to the DOM element with the
'images' class, and resolve the promise. The fulfilled value should be the
image element itself. In case there is an error loading the image (listen for
the'error' event), reject the promise
3. If this part is too tricky for you, just watch the first part of the solution*/

/*
 //PART 2
4. Consume the promise using .then and also add an error handler
5. After the image has loaded, pause execution for 2 seconds using the 'wait'
function we created earlier
6. After the 2 seconds have passed, hide the current image (set display CSS
property to 'none'), and load a second image (Hint: Use the image element
returned by the 'createImage' promise to hide the current image. You will
need a global variable for that 😉)
7. After the second image has loaded, pause execution for 2 seconds again
8. After the 2 seconds have passed, hide the current image
Test data: Images in the img folder. Test the error handler by passing a wrong
image path. Set the network speed to “Fast 3G” in the dev tools Network tab,
otherwise images load too fast
*/
const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('image not found'));
    });
  });
};
let currentImage;
createImage('img/img-1.jpg')
  .then(img => {
    currentImage = img;
    console.log('image 1 loaded');
    return waits(4);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImage = img;
    console.log('image 2 loaded');
    return waits(4);
  })
  .then(() => {
    currentImage.style.display = 'none';
  })
  .catch(err => console.error(err));
