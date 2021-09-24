'use strict';

///////////////////////////////////////
//asyncrnoius and syncreiuos in js

//syncrous js
// synchronous simply means that the code is executed line by line, in the exact order of execution that we defined in our code,

/*So each line of code always waits for the previous line to finish execution. Now this can create problems when one line of code takes a long time to run.*/

////
/*Asynchronous code allows the program to be executed immediately where the synchronous code will block further execution of the remaining code until it finishes the current one*/

//eg  setTimeout

console.log('is my pizza ready');

setTimeout(function () {
  console.log('your pizza is ready');
}, 2000);

console.log('please wait for your pizza to be ready');

//in this above example  first   'is my pizza ready'   will be printed
//then  set time out will be jumped becouse it will take time to get the result and  'please wait for your pizza to be ready' will be printed

//then finally  the call back finction is excuted 'your pizza is ready'  will be printed     this shows then program flow is not blocked in asyncrynous  but in  synchronous it blocked

///note

/*we need a callback function to implement this asynchronous behavior, right?
However, that does not mean that callback functions automatically make code asynchronous.

That is just not the case, okay? For example, the Array map method

accepts a callback function as well, but that doesn't make the code asynchronous.

Only certain functions such as set timeout work in an asynchronous way.We just have to know which ones do

and which ones don't, okay?*/

// callback functions-- alone do not make code asynchronous,
//EventListener--- Alone dosent make code asynchronous

//other exmample of asynchrnous is   Geolocation API, AJAX call

///AJAX

//Ajax stands for asynchronous JavaScript and XML, and basically it allows us to communicate with remote web servers in an asynchronous way.

//we make Ajax calls in our code in order to request some data from a web server dynamically.So without reloading the page

/*So let's say that we have our JavaScript application running in the browser,which is also called the Client.

And we want the application to get some data from a web server.*/

/*So with Ajax, we can do an HTTP request to the server, which has this data. And the server will then set back a response

containing that data that we requested.And this back and forth between Client and server .all happens asynchronously in the background,*/

//different types of requests,like get requests to receive data or post requests to send data to a server.

//API stands for Application Programming Interface.Now in general terms,and on the very high level of obstruction,

/*an API is basically a piece of software that can be used by another piece of software in order to basically allow applications

to talk to each other and exchange information.*/

/*Now in JavaScript and web development,there are countless types of APIs,like the DOM API

or the Geolocation API that we have been using.So these are called APIs because they are a self-contained piece of software that allow other pieces of software to interact with them.

*/

/*So an online API  is essentially an application running on a web server, which receives requests for data,

then retrieves this data from some database and then sends it back to the client.*/

//Now, of course we can build or own Online APIs, but that requires back-end development.So development with servers and databases and all that.

/*So Ajax stands for asynchronous JavaScript and XML.Remember? So the X there stands for XMLand XML is a data format,

which used to be widely used to transmit data on the web.However, these days basically no API uses XML data anymore.

The term Ajax is just an old name that got very popular back in the day, and so it's still used today,even though we don't use XML anymore.

So instead, most APIs these days use the JSON data format.So JSON is the most popular data format today because it's basically just a JavaScript object,

but converted to a string. And so therefore,it's very easy to send across the web and also to use in JavaScript once the data arrives.*/

/////////////////
/*So now that we know about AJAX and API's,let's actually make our first API call.So in this lecture, we're gonna build a nice UI component,*/

//which contains data about a certain country. And this data about the countries is actually gonna come from a third party online API.

/*Now in JavaScript, there are actually multiple ways of doing AJAX calls.But we're gonna start with the most old school one.

And that's called the XML HTTP request function.*/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
/*Use XMLHttpRequest (XHR) objects to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just pa*/

/*
const request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v2/name/portugal');
//open(method: string, url: string | URL)

request.send(); //then we will send request to api becouse the data still not arrived  and this indicate the ASynchronous js
//his AJAX call that we just send off here, is being done in the background, while the rest of the code keeps running.And so this is the asynchronous,non-blocking behavior that we talked about in the last lecture.

request.addEventListener('load', function () {
  //console.log(this.responseText);

  const [data] = JSON.parse(this.responseText);
  console.log(data);

  const html = `<article class="country">
  <img class="country__img" src="${data.flags[0]}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>🌆</span>${data.capital}
  </p>
  <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
    1
  )} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
});
*/

//we will use multiple countries  so we will create  a function that accepts name of country and display  so we will comment out the above code
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  //open(method: string, url: string | URL)

  request.send(); //then we will send request to api becouse the data still not arrived  and this indicate the ASynchronous js
  //his AJAX call that we just send off here, is being done in the background, while the rest of the code keeps running.And so this is the asynchronous,non-blocking behavior that we talked about in the last lecture.

  request.addEventListener('load', function () {
    //console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `<article class="country">
      <img class="country__img" src="${data.flags[0]}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>🌆</span>${data.capital}
      </p>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};
getCountryData('eritrea');
getCountryData('portugal');
getCountryData('france');
getCountryData('usa');
*/
//getCountryData(prompt('Enter country'));

///////245. [OPTIONAL] How the Web Works Requests and Responses (https ,http, TCP/IP etc)

/////////// THE CALL BACK HEEL
////// in this example we will see the secound country should be load after the first one
//the 2nd country will be depend on the first country data  becouse we will get the 2nd counntry data from the  first country

const renderCountry = function (data, className = '') {
  const html = `<article class="country" ${className}>
        <img class="country__img" src="${data.flags[0]}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>🌆</span>${data.capital}
        </p>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
      </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

/*


//first country ajax call
const getCountryDataAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  //open(method: string, url: string | URL)

  request.send(); //then we will send request to api becouse the data still not arrived  and this indicate the ASynchronous js
  //this AJAX call that we just send off here, is being done in the background, while the rest of the code keeps running.And so this is the asynchronous,non-blocking behavior that we talked about in the last lecture.

  request.addEventListener('load', function () {
    //console.log(this.responseText);

    //first country
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //render 1st country data
    renderCountry(data);

    //neighbour data
    const [neighbour] = data.borders; //distructuring
    //console.log(data.borders);

    if (!neighbour) return; //if the country dont have neighbour then return  it may be an island

    //Neighbour country ajax request   this is 2nd request

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`); // we change  name  by alpha  becouse the nabour country in the first country is name by code  [ "DJI", "ETH", "SDN" ]
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);
      //render neibghbour country
      renderCountry(data2, 'neighbour');
    });
  });
};

//getCountryDataAndNeighbour('eritrea');
getCountryDataAndNeighbour('kenya');

//note the above code have nested callback  inside the first country call back there is 2nd country call back   so nested callback is called  callback hell
//So basically, callback hell is when we have a lot of nested callbacks in order to execute asynchronous tasks in sequence. but call bach hell is deficult to understand







////////////  PROMISE
//NEW WAY TO GET API

//const request = fetch('https://restcountries.com/v2/name/eritrea'); //the promise is stored in the  request
//console.log(request); //return  promise

//what is promise
//promises are an ES6 feature. So they became available in JavaScript in 2015.

//- promise is an object that is used as a place holder for the future result of an asynchronous operation

//or   a container for an asynchronousely deliverd value

//or we can say  a container for future value

//perfect example of the future value is  response from ajax call

//Now, what's the big advantage of using promises
// 1.first by using promises we no longer need to rely on event and callback functions to handle asynchronous results, events and callback functions can sometimes cause unpredictable results.

//2but even better with promises, we can chain promises for a sequence of asynchronous operations instead of nesting like we did in the last video. And with this,we can finally escape callback hell,

//since promises work with asynchronous operations,they are time sensitive. So they change over time. And so promises can be in different states

//life sycle of promise
/*So in the very beginning,we say that a promise is pending.And so this is before any value resulting from the

asynchronous task is available.Now, during this time,the asynchronous task is still doing its work in the background.

Then when the task finally finishes, we say that the promise is settled and there are two different types of settled promises and that's 1.fulfilled promises and 2. rejected promises.*/

// states of promise 1.fulfilled promises and 2. rejected promises

/*a fulfilled promise is a promise that has successfully resulted in a value just as we expect it.For example, when we use the promise to fetch data

from an API,a fulfilled promise successfully gets that data,and it's now available to being used.*/

/*a rejected promise means that there has been an error during the asynchronous task.And the example of fetching data from an API,an error would be for example,when the user is offline and can't connect to the API server.*/

//important Note :promise is setteled once  after seatled ether to fullfilled or rejected  they are not get changed

/*So we consume a promise when we already have a promise, for example,the promise that was returned from the fetch function,right at the beginning of this video, remember.But in order for a promise to exist in the first place,

it must first be built.So it must be created in the case of the fetch API,it's the fetch function that builds the promise and returns it for us to consume.So in this case,we don't have to build the promise ourselves in order to consume it.

Now, most of the time we will actually just consume promises,which is also the easier and more useful part*/

///Consuming promises

///this is the modern way to get data from the web API  using promise

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`) // the fetch returns the promise
//     .then(function (response) {
//       //then   method handles the promise
//       console.log(response);
//       //then we will need json to read the response
//       return response.json(); // in order to read data  we call 'json' on the response  also json is a asyncrouse itself means it is runing in the back ground for its response to work so we need to call a methode'then' to hundle  json also
//     })
//     .then(function (data) {
//       //console.log(data); //this will give us the diserd data of the response
//       renderCountry(data[0]);
//     });
//};
//getCountryData('portugal');

//we want to use arrow function for the above code

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`) // the fetch returns the promise
    .then(response => response.json())
    .then(data => renderCountry(data[0]));
};
getCountryData('portugal');
