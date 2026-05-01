Promise is an object that reperesents the eventual completion or failure of an async operation and its resulting value.

A promise is in one of the following three states:

Pending: Neither fulfilled or rejected

Fulfilled: Operation was completed

Rejected: Operation was failed


Promise recieves a callback and it reduces callback hell


Fetch:

Method which starts the process of fetching a resource from a network and returning a promise. 

*** 
A fetch promise only rejects when it encounters a network error, it does not reject HTTP errors like error 404. The HTTP errors are response and they would not be rejected

***

We can also send parameters in fetch.

fetch('https://example.com/',{
    method: 'GET'
    body: new FormData(),
});

Fetch has its own microtask queue of high priority

Wokring: 

Two parts:

(1) Reserve space in memory for variables: onFulfilled, onRejection (arrays, private fields), data

(2) Web browser/Node  
