'use strict';

///////////////////////////////////////
//asyhncrnoius and synchrnous js

//synchrous js
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

//then finally  the call back function is excuted 'your pizza is ready'  will be printed     this shows then program flow is not blocked in asyhncrnous  but in  synchronous it blocked

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
// const countriesContainer = document.querySelector('.countries');
/*Use XMLHttpRequest (XHR) objects to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just pa*/
/*
const request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v2/name/portugal');
//open(method: string, url: string | URL)

request.send(); //then we will send request to api becouse the data still not arrived  and this indicate the ASynchronous js
//his AJAX call that we just send off here, is being done in the background, while the rest of the code keeps running.And so this is the asynchronous,non-blocking behavior that we talked about in the last lecture.

request.addEventListener('load', function () {
  console.log(this.responseText);

  const [data] = JSON.parse(this.responseText); //change from string to object
  console.log(data);

  const html = `<article class="country">
  <img class="country__img" src="${data.flags[0]}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>????</span>${data.capital}
  </p>
  <p class="country__row"><span>????</span>${(+data.population / 1000000).toFixed(
    1
  )} people</p>
    <p class="country__row"><span>???????</span>${data.languages[0].name}</p>
    <p class="country__row"><span>????</span>${data.currencies[0].name}</p>
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
  //this AJAX call that we just send off here, is being done in the background, while the rest of the code keeps running.And so this is the asynchronous,non-blocking behavior that we talked about in the last lecture.

  request.addEventListener('load', function () {
    //console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `<article class="country">
      <img class="country__img" src="${data.flags[0]}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>????</span>${data.capital}
      </p>
      <p class="country__row"><span>????</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
        <p class="country__row"><span>???????</span>${data.languages[0].name}</p>
        <p class="country__row"><span>????</span>${data.currencies[0].name}</p>
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

// const renderCountry = function (data, className = '') {
//   const html = `<article class="country ${className}">
//         <img class="country__img" src="${data.flags[0]}" />
//         <div class="country__data">
//           <h3 class="country__name">${data.name}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>????</span>${data.capital}
//         </p>
//         <p class="country__row"><span>????</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} million people</p>
//           <p class="country__row"><span>???????</span>${data.languages[0].name}</p>
//           <p class="country__row"><span>????</span>${data.currencies[0].name}</p>
//         </div>
//       </article>`;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

const renderError = function (msg) {
  //this will display the error for the user on the screen   and we wiil get the message as argument when the error accured
  countriesContainer.insertAdjacentText('beforeend', msg);
  //countriesContainer.style.opacity = 1;  // we commented out becouse we use "finally" method and finaly will full fill the opacity
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

//-A promise is an object that may produce a single value some time in the future.either resolved(fullfiled )or rejected

//- promise is an object that is used as a place holder for the future result of an asynchronous operation

//or   a container for an asynchronousely deliverd value

//or we can say  a container for future value

//perfect example of the future value is  response from ajax call

//Now, what's the big advantage of using promises
// 1.first by using promises we no longer need to relay on event and callback functions to handle asynchronous results, events and callback functions can sometimes cause unpredictable results.

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
//       console.log(data); //this will give us the diserd data of the response
//       renderCountry(data[0]);
//     });
// };
// getCountryData('portugal');

//we want to use arrow function for the above code

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`) // the fetch returns the promise
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]));
// };
// getCountryData('portugal');

//////using sync/await
// const getCountryData = async function (country) {
//   const res = await fetch(`https://restcountries.com/v2/name/${country}`); // the fetch returns the promise
//   const data = await res.json();
//   renderCountry(data[0]);
//   console.log(data);

// };
// getCountryData('portugal');

///////////////promise chaining

//we will add the nighbour country

//we used here chaining promises
// const getCountryData = function (country) {
//   //country 1
//   fetch(`https://restcountries.com/v2/name/${country}`) // the fetch returns  promise
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);
//       console.log(data[0]);
//       const neighbour = data[0].borders[0]; //this means country1.borders[0]
//       console.log(neighbour);

//       if (!neighbour) return;
//       //country2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`); //the fetch returns  promise
//     })
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data, 'neighbour'); //hundles promise
//       //console.log(data);
//       const neighbour1 = data.borders[0];
//       //console.log(neighbour1);
//       if (!neighbour1) return;

//       //neighbour of neighbour
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour1}`); //the fetch returns  promise
//     })
//     .then(response => response.json()) //hundles promise
//     .then(data => {
//       renderCountry(data, 'neighbour'); //we pass both the jason data and the class neighbour
//       console.log(data);
//       const neighbour2 = data.borders[0];
//       console.log(neighbour2);
//       if (!neighbour2) return;

//       //neighbour of neighbour of neighbour
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour2}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour')); //hundles promise
// };

// btn.addEventListener('click', function () {
//   getCountryData('kenya');
// });

//async/await  easet way

const getCountryData = async function (country) {
  //country 1
  const res1 = await fetch(`https://restcountries.com/v2/name/${country}`); // the fetch returns  promise
  const data1 = await res1.json();
  renderCountry(data1[0]);
  const neighbour = data1[0].borders[0]; //this means country1.borders[0]

  if (!neighbour) return;
  //country2
  const res2 = await fetch(`https://restcountries.com/v2/alpha/${neighbour}`); //the fetch returns  promise
  const data2 = await res2.json();
  renderCountry(data2, 'neighbour'); //hundles promise
  const neighbour1 = data2.borders[0];

  if (!neighbour1) return;

  //neighbour of neighbour
  const res3 = await fetch(`https://restcountries.com/v2/alpha/${neighbour1}`); //the fetch returns  promise
  const data3 = await res3.json();
  renderCountry(data3, 'neighbour');
  //we pass both the jason data and the class neighbour
  const neighbour2 = data3.borders[0];

  if (!neighbour2) return;

  //neighbour of neighbour of neighbour
  const res4 = await fetch(`https://restcountries.com/v2/alpha/${neighbour2}`);
  const data4 = await res4.json();
  renderCountry(data4, 'neighbour');
};

btn.addEventListener('click', function () {
  getCountryData('kenya');
});

//note we chain four  asyncrnious promises  and we go out of call back hell
// and also  since the nieghbour country depend on the first country
//the sequence of the response is in order it means it waits the first data to getback

//note promise helps as to resolve complex asynchrnous code

/*
///////////Handling Rejected Promises   (handling the error or catching the error)

//promises rejected when we try to fetch the data but the newtwork is  gone   or some thing else    so we need to handle the error

//we used here chaining promises
const getCountryData = function (country) {
  //country 1
  fetch(`https://restcountries.com/v2/name/${country}`) // the fetch returns  promise
    .then(
      response => response.json()
      //,err => alert(err)  we can hundle all  eriors using catch methoa at the last of the chain instead of in every promise chine
    ) //then(fulfiled callback , rejected callback)  // we handle promise that is fullfilled or promise that is rejected
    .then(data => {
      renderCountry(data[0]);
      console.log(data[0]);
      const neighbour = data[0].borders[0]; //this means country1.borders[0]
      console.log(neighbour);

      if (!neighbour) return;
      //country2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`); //the fetch returns  promise
    })
    .then(response => response.json())
    .then(data => {
      renderCountry(data, 'neighbour'); //hundles promise
      //console.log(data);
      const neighbour1 = data.borders[0];
      //console.log(neighbour1);
      if (!neighbour1) return;

      //neighbour of neighbour
      return fetch(`https://restcountries.com/v2/alpha/${neighbour1}`); //the fetch returns  promise
    })
    .then(response => response.json()) //hundles promise
    .then(data => {
      renderCountry(data, 'neighbour'); //we pass both the jason data and the class neighbour
      console.log(data);
      const neighbour2 = data.borders[0];
      console.log(neighbour2);
      if (!neighbour2) return;

      //neighbour of neighbour of neighbour
      return fetch(`https://restcountries.com/v2/alpha/${neighbour2}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    //.catch(err => alert(err)); //this catch method  handles all error that could accoure in every promise of this chain

    //alternatve way or we make it styled but its the same with the above error  both catching the error
    .catch(err => {
      console.error(`${err} ?????? ????`); // typeError:Failed to fetch ?????? ????
      //also we can print there is error happened or to let them know to users on the screen  and lets create  function called 'renderError'
      renderError(`something wrong : ${err.message} ????????????`); //this will render in the screen     something wrong : Failed to fetch ????????????
    })
    .finally((countriesContainer.style.opacity = 1));
  //finally is called when ever happened to the promise  ether reject or fullfiled  so here opacity is handled  we dont need opacity to be hundled in the  fulfiled promise or rejected promise
};

btn.addEventListener('click', function () {
  getCountryData('gmfmswdmwqndfinwfi');
});

////note   'then'  then called when the promise is fullfilled     'catch' is called when the promise is rejected  and  'finally' called  when ever  happened

*/

//////////////////throwining error manually

///what if  we pass country that is not exist in the world   then we will  need to hundle them munually

//lets copy  the above code and comment out too

//we used here chaining promises

/*
const getCountryData = function (country) {
  //country 1
  fetch(`https://restcountries.com/v2/name/${country}`) // the fetch returns  promise
    .then(response => {
      console.log(response);
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      console.log(data[0]);
      const neighbour = data[0].borders[0]; //this means country1.borders[0]
      console.log(neighbour);

      if (!neighbour) return;
      //country2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`); //the fetch returns  promise
    })
    .then(response => {
      console.log(response);
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then(data => {
      renderCountry(data, 'neighbour'); //hundles promise
      //console.log(data);
      const neighbour1 = data.borders[0];
      //console.log(neighbour1);
      if (!neighbour1) return;

      //neighbour of neighbour
      return fetch(`https://restcountries.com/v2/alpha/${neighbour1}`); //the fetch returns  promise
    })
    .then(response => response.json()) //hundles promise
    .then(data => {
      renderCountry(data, 'neighbour'); //we pass both the jason data and the class neighbour
      console.log(data);
      const neighbour2 = data.borders[0];
      console.log(neighbour2);
      if (!neighbour2) return;

      //neighbour of neighbour of neighbour
      return fetch(`https://restcountries.com/v2/alpha/${neighbour2}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} ?????? ????`); // typeError:Failed to fetch ?????? ????
      //also we can print there is error happened or to let them know to users on the screen  and lets create  function called 'renderError'
      renderError(`something wrong : ${err.message} ????????????`); //this will render in the screen     something wrong : Failed to fetch ????????????
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
  //finally is called when ever happened to the promise  ether reject or fullfiled  so here opacity is handled  we dont need opacity to be hundled in the  fulfiled promise or rejected promise
};

btn.addEventListener('click', function () {
  getCountryData('kenya');
});

//getCountryData('egypt');
*/

//we will  refactor the above error code, we will create  method   "getJson"
/*
const getJSON = function (url, errorMesge = 'something wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMesge}(${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  //country 1

  getJSON(`https://restcountries.com/v2/name/${country}`, `Country not found `)
    .then(data => {
      renderCountry(data[0]);
      console.log(data[0]);
      const neighbour = data[0].borders[0]; //this means country1.borders[0]
      if (!neighbour) throw new Error('no neighbour found!');

      if (!neighbour) return;
      //country2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        `Country not found`
      ); //the fetch returns  promise
    })
    .then(data => {
      renderCountry(data, 'neighbour'); //hundles promise
      //console.log(data);
      const neighbour1 = data.borders[0];
      //console.log(neighbour1);
      if (!neighbour1) return;

      //neighbour of neighbour
      return fetch(`https://restcountries.com/v2/alpha/${neighbour1}`); //the fetch returns  promise
    })
    .then(response => response.json()) //hundles promise
    .then(data => {
      renderCountry(data, 'neighbour'); //we pass both the jason data and the class neighbour
      console.log(data);
      const neighbour2 = data.borders[0];
      console.log(neighbour2);
      if (!neighbour2) return;

      //neighbour of neighbour of neighbour
      return fetch(`https://restcountries.com/v2/alpha/${neighbour2}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} ?????? ????`); // typeError:Failed to fetch ?????? ????
      //also we can print there is error happened or to let them know to users on the screen  and lets create  function called 'renderError'
      renderError(`something wrong : ${err.message} ????????????`); //this will render in the screen     something wrong : Failed to fetch ????????????
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
  //finally is called when ever happened to the promise  ether reject or fullfiled  so here opacity is handled  we dont need opacity to be hundled in the  fulfiled promise or rejected promise
};

btn.addEventListener('click', function () {
  getCountryData('kenya');
});

//getCountryData('australia');
*/
////challange 1  done at dd

/////////Asynchronous Behind the Scenes The Event Loop

/*
a JavaScript runtime is basically a container which includes all the different pieces that are necessary to execute JavaScript code.

Now, the heart of every JavaScript runtime is the engine. So, this is where code is actually executed and where objects are stored in memory.

So, these two things happen in the call stack  and in the heap.
*/

/*
Now, what's important to note here is that JavaScript has only one thread of execution.

And so it can only do one thing at a time.There is absolutely no multitasking happening  in JavaScript itself.

Now, other languages like Java can execute multiple pieces of code at the same time, but not JavaScript.
*/

//js have only one thread of execution  , it means it will do one thing at the time

/*next we have 
--the web APIs environment.These are some APIs provided to the engine, but which are actually not part of

the JavaScript language itself. So, that's things like the DOM timers  the fetch API, the geolocation API, and so on and so forth.*/

/*Next up, there is the 
--callback queue  and this is a data structure that holds all the ready to be executed callback functions that are attached to some event that has occurred.

-Finally, whenever the call stack is empty the
-event loop takes callbacks from the callback queue and puts them into call stack so that they can be executed.

So the event loop is the essential piece that makes asynchronous behavior possible in JavaScript.

It's the reason why we can have a non blocking concurrency model in JavaScript. And a concurrency model is simply how a language handles multiple things happening at the same time.
*/

/*let's focus on the essential parts of the runtime here.  So, that's the call stack the event loop the web APIs and to callback queue.

So, as you know, by now, a JavaScript engine is built  around the idea of a single thread

-question : But if there was only one thread of execution in the engine then how can asynchronous code be executed  in a non blocking way?*/

/*as you already know everything related to the DOM is not really part of JavaScript, but of the web APIs. 

And so it's in a web APIs environment where the asynchronous tasks related to the DOM will run.

And in fact, the same is true for timers AJAX calls and really all other asynchronous tasks. 

So, again, these asynchronous tasks will all run in the web API environment of the browser.

- for example if we have image is loading its doing it asyncrousley in the background which means in the web Api not in call stuck 
becouse if it was in call stack it will block the other codes to excute  becouse loding image takes time */

/*if we want to do something after the image has finished loading, then we need to listen to the load event.

And so that's exactly what we do in the next line of code. So, here we attach an event listener

to the load event of that image and pass an a callback function as always. In practice, this means to register this callback

in the web APIs environment, exactly where the image is loading. then after the image finshed loading the callback function of the image which attached is put in callback qeue 

-And the callback queue is basically an ordered list of all the callback functions that are in line to be executed.

-note that if there is another call back in the queue  then  the new callback ordered behind the first call back on the queue


Now, another thing that's important to mention here is that the callback queue also contains callbacks coming from DOM events like clicks or key presses or whatever.

Now, we learned before that DOM events are not really asynchronous behavior, but they still use the callback queue to run their attached callbacks.
*/

/*event loop--So, here is what the event loop does.It looks into the call stack and determines whether it's empty or not.

Except of course for the global context,then if the stack is indeed empty which means that there's currently no code being executed

then it will take the first callback from the callback queue and put it on the call stack two will be executed. And this is called an "event loop tick".

event loop has the extremely important task of doing coordination between the call stack and to callbacks in the callback queue.

So, the event loop is basically who decides exactly when each callback is executed.*/

/**Another thing that becomes clear from this whole explanation is that the JavaScript language itself has actually no sense of time.

That's because everything that is asynchronous does not happen in the engine. It's the runtime who manages all the asynchronous behavior.*/

/*So, in a nutshell, the web APIs environment, the callback queue  and the event loop, all together, make it possible that asynchronous code can be executed in a non blocking way 
even with only one thread of execution in the engine.*/

//Note : call back coming from promises is not going to call back QUEUE  instead they  have special queue  called "micro tasks queue"  and  callback that came from promises have priority over the callback in the callback queue
//the event loop first  take the callback in mixcrotask queue  to be excuted then when it finsh with it goes to callback queue

//event loop practice

console.log('test start'); // 1 st to print  this will first print

setTimeout(() => console.log('0 sec timer'), 0); // then lastly we get this printed since  it runs after the  promise in micro tasks queue

Promise.resolve('test resolved').then(res => console.log(res));

Promise.resolve('resolve 2').then(res => {
  //since the secound promis take long to excute the timer needs to wait
  for (let i = 0; i < 100000000; i++) {}
  console.log(res);
});
console.log('test end'); // 2 to print

//we will build A simple promise and  we will consiume it    that exmple is lottery promise
//that return promise if we win or lose and we use the returnd promise to be consumed by 'then' method

////we will put  call back function called executor   inside that promise have two argument  (resolve ,reject)

//lets assign the promise to variable called  lotteryPromise
// let lotteryPromise = new Promise(function (resolve, reject) {
//   //promise
//   if (Math.random() > 0.5) {
//     resolve('you win the lottery ????');
//   } else {
//     reject('you lose money????');
//   }
// });
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//the above code is not being asyncrnouse   we will add timers to be  asyncrnouse

let lotteryPromise = new Promise(function (resolve, reject) {
  //promise
  console.log('lottery draw happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('you win the lottery ????');
    } else {
      reject(new Error('you lose money????'));
    }
  }, 2000);
});
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

/*NOTE
in practice, most of the time all we actually do is to consume promises. And we usually only built promises

to basically wrap old callback based functions into promises. And this is a process that we call promisifying.*/

//So basically promisifying means to convert callback based asynchronous behavior to promise based.

///promisifying setTimeOut

const wait = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, sec * 1000);
  });
};

// wait(2)
//   .then(() => {
//     console.log('i waited for 2 sec');
//     return wait(1);
//   })
//   .then(() => console.log('i waited 1 sec'));

// so we can promisifay this settimeOut code

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// the best way to write the  above callback Hell
wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('4 second passed');
  });

//we can  also   imdettly  'resolve' promise

Promise.resolve('abc').then(x => console.log(x)); //abc
Promise.reject(new Error('problem happend  ')).catch(err => console.error(err)); //Error: problem happend

//PROMISFYING THE GEOLOCATION API    from callback based to promise based

//call back based
// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );

//promise based api
// we promisfying the above commented out code
const getPositonss = new Promise(function (resolve, reject) {
  // navigator.geolocation.getCurrentPosition(
  //   position => resolve(position),
  //   err => reject(err)
  // );

  //or we  can simpley do that  its the same with the above commented out code

  navigator.geolocation.getCurrentPosition(resolve, reject);
});
getPositonss.then(pos => console.log(pos)); //we get the current location from the browser

//async and await  another way or easer way  to consume promises
//ES2017  async / await introduces

///////async
/*
- It simply allows us to write promises based code as if it was synchronous and it checks that we are not breaking the execution thread.
- It operates asynchronously via the event-loop. in the background  not in the main thread of of excection

-First of all we have the async keyword, which you put in front of a function declaration to turn it into an async function.

-Async functions will always return a value. It makes sure that a promise is returned and if it is not returned then 
javascript automatically wraps it in a promise which is resolved with its value.
*/

//Eg :Try typing the following lines into your browser's JS console:

//this is function decleration not fancy
function hellos() {
  return 'Hello there'; //this return value becouse its normal function
}
const zz = hellos();
console.log(zz); // Hello there

//lets add async to the above function   to make it asyncrous

async function hello() {
  return 'Hello there'; //this return as promise then we consume it using then
}
//Invoking the function now returns a promise. This is one of the traits of async functions ??? their return values are guaranteed to be converted to promises
hello().then(value => {
  console.log(value);
}); //Hello there
//note :So the async keyword is added to functions to tell them to return a promise rather than directly returning the value.

//we can also rewrite the above async function as expression function  we will change the name to avoid redclerastion error

const helo = async function () {
  //const helo: () => Promise<string>
  return 'heloo there'; //returns promise
};
helo().then(value => {
  console.log(value); //hello there
});

//or we can write with arrow function
const helos = async () => 'heloo there';
helos().then(value => {
  console.log(value);
}); //'heloo there';

//////////The await keyword

//Await keyword is used to wait for the promise. It could be used within the async block only.
//It makes the code wait until the promise returns a result. It only makes the async block wait.

//lets make the above example add 'await'  key word

async function hellow() {
  const greeting = await Promise.resolve('heloo there'); //the await keyword will   pause your code on that line until the promise fulfills,
  console.log(greeting); //heloo there
}
hellow();
// lets prove it by adding the below line of  codes

console.log('hiiiiiii'); ///hiiii  this will excute before the promise  becouse await make the async function wait until it get the promise
//so out put is   hiiiiii    then heloo there

//another real example
//lets see use the country  api

//const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>????</span>${data.capital}
        </p>
        <p class="country__row"><span>????</span>${(
          +data.population / 1000000
        ).toFixed(1)} million people</p>
          <p class="country__row"><span>???????</span>${data.languages[0].name}</p>
          <p class="country__row"><span>????</span>${data.currencies[0].name}</p>
        </div>
      </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const whereIAms = async function (country) {
  //fetch(`https://restcountries.com/v2/name/${country}`).then(res=>{console.log(res)})//  the same like the below code

  const dataCountry = await fetch(
    `https://restcountries.com/v2/name/${country}` //we wait for fulfiled promise   then we can consume it
  );
  console.log(dataCountry); //we get the response promise and store it in the dataCountry
  const data = await dataCountry.json(); //since json is also return a promise  then we store the returned json in data
  console.log(data);
  renderCountry(data[0]);
};
whereIAms('sudan');
console.log('my country'); //my country

//so the above example  shows us how async and await works
// first we make the function asyncrous and then we pause the  async function  using 'await' keyword util we get the promise fulfiled
// but in non  blocking way  since it runs asynchrounosly  in the background  the main tread is not blocked , one of the example we see is   console.log('my country') is run in the main  tread since it was not blocked by the await keyword

//and then   we  store  the response in   'dataCountry' variable and  since   json is return promise we also make the code wait till we get the promise and store it in the date  and then consume the data

//note:  so  with  the  async/await we  don't use  'then' any more to consume it, it make it very easy to consume using async/await

//////////// hundling  error  in async /await  using try and catch

//but first lets catch  errors  in regular javascrispt codes

// try {
//   let x = 2;
//   const y = 1;
//   y = 2; //this will be error becusse we re assigned  const y
// } catch (err) {
//   //this hundles the error
//   alert(err.message); //invalid assignment to const 'y'   is pop up  in the screen
// }

// the example  for try / catch with async  is in dd.js refer to it

//261 Returning Values from Async Functions

//return value from async function is  always return a promise

const shalom = async function () {
  //const shalom  () => Promise<string>
  return 'heloo there lulu'; //returns promise
};
const greet = shalom();
console.log(greet); //Promise { <state>: "fulfilled", <value>: "heloo there lulu" }

console.log('hi lulu'); //hi lulu

//note:async function return promise

//we can write the above code using  async

const shallom = async function () {
  //const shalom  () => Promise<string>
  return 'heloo there lulu'; //returns promise
};
shallom().then(value => {
  console.log(value);
});
// heloo there lulu

console.log('hi lulu'); //hi lulu

//using async/await
const shalloms = async function () {
  const selam = await Promise.resolve('heloo there lulu'); //returns promise
  console.log(selam); //'heloo there lulu'
};
shalloms();
console.log('hi lulu');

///////Running Promises in Parallel  262

//lets  make maltiple  ajax call in consective (one after another in order ) , to see the difference with parallel ajax call

//we will create a function that recieve argument of coutries and  we will use method "getJSON" FROM provious leacture

const getJSON = function (url, errorMesge = 'something wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMesge}(${response.status})`);

    return response.json();
  });
};

const get3Countries = async function (c1, c2, c3) {
  try {
    const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`); //we pass this to the  getJSON method   and distructure it in variable data 1
    const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
    console.log([data1.capital, data2.capital, data3.capital]); //Array(3) [ "Asmara", "Kampala", "Nairobi" ]  we get them in sequence  one wait for the another
  } catch (err) {
    console.error(err);
  }
};

get3Countries('eritrea', 'uganda', 'kenya');

//note : we get longer loading time  when we   get multiple promises in sequence

//////////running in parallel
///so to make the above load all at the same time  we need to run them in parallel and the loading time will be shortened

//i will change the variable name  and all that conflict with the redicleration

const getJSONs = function (url, errorMesge = 'something wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMesge}(${response.status})`);

    return response.json();
  });
};

//we will use promise.all() method     that can run any promise in parallel
//promise.all combinator. So it's called a combinator function because it allows us to combine multiple promises.
/*
The Promise.all() method takes an iterable of promises as an input,
 and returns a single Promise that resolves to an array of the results of the input promises. 
 This returned promise will resolve when all of the input's promises have resolved,
  or if the input iterable contains no promises. 
  It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, 
  and will reject with this first rejection message / error.
   */

const get3Countriess = async function (c11, c22, c33) {
  try {
    //Promise.all() returns a new promise thats way we use await // promise.all recives array of resolved results And so promise.all receives an array and it also returns an array.
    const data = await Promise.all([
      getJSONs(`https://restcountries.com/v2/name/${c11}`),
      getJSONs(`https://restcountries.com/v2/name/${c22}`),
      getJSONs(`https://restcountries.com/v2/name/${c33}`),
    ]);

    console.log(data.map(d => d[0].capital)); //we will need map to get the capital from the array
  } catch (err) {
    console.error(err);
  }
};

get3Countriess('eritrea', 'uganda', 'kenya');

//note: if one promise is rejectd in the   promise.all() rejects all the other promises   so that means promise.all method  returns short cercuting  //So we say that promise.all short circuits

//when one promise rejects. So again, because one rejected promise is enough for the entire thing to reject as well.

//whenever you have a situation in which you need to do multiple asynchronous operations at the same time, and operations that don't depend on one another,

//then you should always, always run them in parallel,just like we did here.

////////////Promise.race

// Promise.race, just like all other combinators,receives an array of promises and it also returns a promise.

//The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.

//eg  lets race between three country
//we will use an iFEE function  that means  self invoked function

(async function () {
  const res = await Promise.race([
    getJSONs(`https://restcountries.com/v2/name/italy`),
    getJSONs(`https://restcountries.com/v2/name/Egypt`),
    getJSONs(`https://restcountries.com/v2/name/france`),
  ]);
  console.log(res[0]);
})();

//note:the promise fulfiled first is win the race  with the above code the winner print out

//ex2

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then(value => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// expected output: "two"

/////////The Promise.allSettled() method
// returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

//takes in an array of promises again,and it will simply return an array of all the settled promises. And so again, no matter if the promises got rejected or not.

//the difference is that Promise.all will short circuit as soon as one promise rejects,but Promise.allSettled, simply never short circuits.

//eg

Promise.allSettled([
  Promise.resolve('Error'),
  Promise.reject('succsess'),
  Promise.resolve('succsess'),
]).then(res => console.log(res));
/*
Array(3) [ {???}, {???}, {???} ]
???
0: Object { status: "fulfilled", value: "Error" }
???
1: Object { status: "rejected", reason: "succsess" }
???
2: Object { status: "fulfilled", value: "succsess" }
???
length: 3*/

//note: it return all the  fullfilled and reject promises    even the rejected

//if we see promise.all we get error becouse we have one reject   it short circits  but Promise.allSettled is not short cercuits

Promise.all([
  Promise.resolve('suceess1'),
  Promise.reject('Error'),
  Promise.resolve('succsess2'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err)); // output Error

///Promise.any()

//The Promise.any() method accepts a list of Promise objects as an iterable object.
//As soon as a Promise from the list fulfills,
//the Promise.any() returns the fulfilled Promise that resolves with a value.

/*
Promise.any takes in an array of multiple promises and this one will then return

the first fulfilled promise and it will simply ignore rejected promises.

So basically Promise.any is very similar to Promise.race with the difference

that rejected promises are ignored.And so therefore the results of Promise.any is always gonna be a fulfilled promise,
*/

Promise.any([
  Promise.resolve('suceess1'),
  Promise.reject('Error'),
  Promise.resolve('succsess2'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err)); // output suceess1    return first fullfiled promise
