# Asynchronicity in Javascript: 

### Synchronous Code:

Code runs in a controlled sequence, called the **execution order**. For instance, you would expect this snippet of code to run in the order it was written, from top to bottom: 

```
const countSheep = (sheepArray) => {
    return sheepArray.length;
}

const sheeps = ["Bramble", "Daffodil", "Buttercup"];

console.log(countSheep(sheeps));
```

The execution order of this programme would be as follows: 

1. Register the declaration of the function ```countSheep```
1. Register the declaration and assignation of the variable ```sheeps```
1. Call the ```countSheep()``` function with the argument ```sheeps```
1. Call the ```console.log()``` function on the return value of the ```countSheep(sheeps)``` function call

<br>

If we had tried to call the function ```countSheep``` before it was declared, we would have ran into a bug due to the top to bottom execution order - as far as our programme is concerned, a variable only exists if it has been declared before being used. 

This is typical behaviour, and an example of **synchronous code** - operations are executed one at a time, from top to bottom. 

### Asynchronous Code:

JavaScript, as a programming language, is what we call a **single-threaded language**. This means that it can only run one thing at a time, and can only start executing the next operation in the programme once the first task has completed. Multi-threaded languages can support more than one operation all at once, but that's not the case with JavaScript. 

Given that JavaScript is used in web browsers, that typically need to be able to run many operations all at once, this comes with a set of challenges. Besides, some of the operations that we need to perform for the web are what we call **asynchronous operations**, i.e. operations that take an uncertain amount of time to run. These asynchronous operations **often are requests to external server for data to display on a web page**. When making calls to servers, **you cannot know how long it will take to get a response**, as that depends on a number of factors, including the speed of your internet. Imagine what would happen if our browsers were only able to send one request at a time and had to wait for a response before moving on to the next one! For example, when loading the reddit homepage, there's about 266 operations executing to get all the data needed to render everything on the page - if these had to be run one by one by one, some slower than other, you can picture just how slow and frustrating loading any given page would be. 

Here's a video illustration of these principles: 
[video here]

### Asynchronous code and execution order: 

As seen above, asynchronous operations can have a significant impact on how our programmes runs - what if, for example, I need to somehow "wait" for some data from an external server in order to perform a particular operation, such as, for instance, printing it to the console? What happens if asynchronous code is mixed in with synchronous code that executes in the typical way, from top to bottom? Let's examine a few different scenarios to answer these questions. 

The first rule that we will see is that, when synchronous code and asynchronous code are mixed together, **there will be no "pausing and waiting" for asynchronous code to finish running before the rest of the synchronous code executes**. 
Instead, the programme will run as usual, executing from top to bottom, "register" the asynchronous operations, but move on to the next synchronous block. The asynchronous code will finish executing only after all of the synchronous operations have ran.

![asynchronous/synchronous execution diagram](image.png)


### Enter Promises:

Promises are a feature of JavaScript that we use to handle this asynchronicity problem and regain control over the execution flow of our programme. Promises let you control the order in which operations will run in your code, and only 





start with definition of key concepts 

- execution order

- single threaded 

- control flow 

Explain classic execution of JavaScript code, with some diagrams too
Then, why that's a problem in the case of code that we don't know how long will take to execute - could have a short video there to illustrate just how many requests a website sends, and why we can't just sit around waiting for them all to complete. 

Give examples of tasks that might take a while

Enter Promises:

Promises are the syntactic feature in JavaScript that allows us to manage asynchronicity and regain control of execution order of things. 

Here, and explanation of what promises are, their basic syntax and 
why it matters. 

Could come with a video maybe? 

Diagram of water/liquid flowing down to represent data going down the
promises chain 

Exercise: 
- some exercises - predict what a certain value will be at a certain execution point quizz form with answers underneath, to deal with execution order. 

That could then segway back into the rest of our curriculum and cahin onto the calling apis material 

