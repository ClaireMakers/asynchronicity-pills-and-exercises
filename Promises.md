### Promises:

Promises are a feature of JavaScript that we use to handle this asynchronicity problem and regain control over the execution flow of our programme. Promises let you control the order in which some operations will run in your code - for example, if some of your code depends on data coming from an external server, using promises will let you run these operations once you have received the data.

Promises are **objects in-built in JavaScript** - you can think of them as containers for future data, a representation of the future completion or failure of an asynchronous operation. As such, they have three different states: 

1. **Fulfilled** - *the asynchronous operation completed successfully* - for instance, the data you requested from an external server has come back with no isses. 

1. **Rejected** - *the asynchronous operation failed* - for instance, you sent an invalid request to a server, and it answered with an error.  

1. **Pending** - *the Promise has yet to to be either rejected or fulfilled.* - this is the lapse between sending a request and getting an answer back from your server. 

<br>

![alt text](image-3.png)

### Writing a Promise from scratch: 

In order to create a new Promise, you need to use the ```new``` keyword that you would normally use to create an instance of a class in JavaScript. This is because Promises are **an in-built class** that you can use as an when needed in a JavaScript programme. The Promise constructor takes one argument, a callback function with two arguments of its own, the two functions ```resolve``` and ```reject```:

<br>

![alt text](image-1.png)

<br>

```Resolve``` and ```Reject``` also have one thing in common - they each return a new promise, potentially starting what we call a **promises chain**. Promises chains let you write code that will execute only once a particular asynchronous operation has ran, successfully or unsuccessfully (i.e. once a promise was either fulfilled or rejected). 

As Promises are classes, **they come with their associated methods**. The most important methods to remember in the case of Promises are .```then()``` and ```.catch()```. These two methods will let you start building promises chains and handle errors when they arise.

For instance: 

```
const promise = new Promise((resolve, reject) => {

    resolve("This Promise will resolve with this success string");

}).then((data) => {
    console.log(data);
});

//This console.log(data) would print "This Promise will resolve with this success string" to the terminal, once the first asynchronous operation completes
```

Diagram of water/liquid flowing down to represent data going down the
promises chain 

Exercise: 
- some exercises - predict what a certain value will be at a certain execution point quizz form with answers underneath, to deal with execution order. 

That could then segway back into the rest of our curriculum and cahin onto the calling apis material 

An exercise - fix the promise chain - make it so something executes in the right sequence