# Asynchronicity in Javascript: 

### An alternative syntax to write promises:

So far, we have been writing promises using their "traditional" syntax, which involves chaining ```.then()``` method calls in order to control the execution flow of long-running tasks. Each ```.then()``` block executes only once the promise in the chain above finishes executing. This is the original syntax of promises - they were introduced to JavaScript in 2015 in that form, as a part of the ECMAScript 6 (ES6) specification. 

Since then, another syntax for writing promises has been introduced in a later revision of JavaScript, ECMAScript 2017 (ES8). However, the underlying principle remains unchanged. Although the ```async/await``` syntax 'hides' the asynchronous nature of the code, making it resemble regular synchronous code, everything we discussed about asynchronicity and promises so far still holds true. ```Async/await``` is merely **synctatic sugar over promises that improves their writability and readability**. 

<br>

### Comparing .then() and async/await syntax: 

Here's an example of the same fetch request, written first with a chain of ```.then()```, and after that, handled with async/await instead: 

```
const fetchPickachuData = () => {
    // This function returns a promise chain
    return fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data.name) // => prints "pikachu"
    });
}

const fetchVulpixData = async () => {

    const response = await fetch("https://pokeapi.co/api/v2/pokemon/vulpix");
    const data = await response.json(); 
    console.log(data.name); // prints "vulpix"

    return data;  //This function returns a promise chain
}
```

If we play spot the difference, we can see a few things: 

1. The function ```fetchVulpixData()``` is declared with the ```async``` keyword - this means that this function returns a promise, and contains tasks that will be executed asynchronously. If you forget to add the ```async``` keyword in a function declaration, you won't be able to use the ```await``` keyword within the function body. 

1. Instead of ```.then()```, we are now using the ```await``` keyword in front of promises. For instance, ```response.json()``` returns a promise, therefore we can use the ```await``` keyword in front of it. This signals that **all the code after that line** will only run **once the ```response.json``` promise is fulfilled.**

1. We can "capture" the resolved value of a promise with the ```const variable = await promise``` syntax. Then, we are able to work with that data on the lines below, using that variable in a way that feels similar to synchronous code. However, under the hood, we are still dealing with promises, and the syntax above is really equivalent to ```.then((variable) => {})```.

1. This means that ```return data``` **doesn't actually returns the data itself** - it returns a promise chain, and is the equivalent of the ```return fetch(url)``` syntax we've used so far. 

<br>

### Catching errors with async/await:  

Let's keep building on the example above, this time, adding some error handling: 

```
const fetchPickachuData = () => {
    // This function returns a promise chain
    return fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data.name) // => prints "pikachu"
    }).catch((error) => {
        console.log(error)
    })
}

const fetchVulpixData = async () => {
    try {
    
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/vulpix");
    const data = await response.json(); 
    console.log(data.name); // prints "vulpix"

    return data;  //This function returns a promise chain

    } catch (error) {
        console.log(error)
    }
}
```

You can see that we now have two blocks where we execute our asynchronous code, ```try{}``` and ```catch{}```. 

Everything inside of ```try {}``` is the equivalent of a chain of ```.then()```, i.e. resolved promises. 

Everything inside of ```catch {}``` is the error handling that would normally be added inside of a ```.catch()``` block. The ```catch (error) {}``` block will run if one of the promises inside the ```try {}``` block is rejected. 