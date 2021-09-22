'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//asyncrnoius and syncreiuos in js

//syncrous js
// synchronous simply means that the code is executed line by line, in the exact order of execution that we defined in our code,

/*So each line of code always waits for the previous line to finish execution. Now this can create problems when one line of code takes a long time to run.*/

////
/*Asynchronous code allows the program to be executed immediately where the synchronous code will block further execution of the remaining code until it finishes the current one*/

//eg  setTimeout   we will

console.log('is my pizza ready');

setTimeout(function () {
  console.log('your pizza is ready');
}, 2000);

console.log('please wait for your pizza to be ready');

//in this above example  first   'is my pizza ready'   will be printed
//then  set time out will be jumped becouse it will take time to get the result and  'please wait for your pizza to be ready' will be printed

//then finally  the call back finction is excuted 'your pizza is ready'  will be printed     this showes then program flow is not blocked in asyncrynous  but in  synchronous it blocked

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
