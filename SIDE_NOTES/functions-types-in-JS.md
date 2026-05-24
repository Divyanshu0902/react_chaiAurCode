# Different Types of Functions in JS and their functionalities

- In JS there are one kind of funtions that execute immediately
- and there is another kind that just tells the browser to create the function and store it in memory so that it shall be run later.
- again these not-immediately running functions are written in to syntax format -

**(The Old Way): Normal Function :**
```js
function() {
    console.log("Hello")
}
```

**(The Modern way): Arrow Function :**
```js
() => {
    console.log("Hello")
}
```


>Both create a function.

>Neither runs immediately.

- They can be stored in a variable and then called to run later like this-
```js
const greet = function() {
    console.log("Hello")
}

greet()
```
OR
```js
const greet = () => {
    console.log("Hello")
}

greet()
```

## So Why Arrow Functions Exist?

Mostly:

shorter syntax
cleaner code
behaves differently with this (advanced topic)
<br>
<br>
<br>


# Imp. Thing about Immediate vs Later Fn execution :
This:
```js
function() {

}
```

creates a *function object*. It DOES NOT run automatically.

*What Actually Runs It?*

Adding:

()

after function call.

Example:

`greet()`
<br><br><hr>

## VERY IMPORTANT Distinction
This -
```js
console.log("Hello")
````
 Runs Immediately
<br>but..
This -
```js
() => {
    console.log("Hello")
}
```
creates function only.

## Another Important Concept :
 in this code --

 ```js
setTimeout(() => {
    console.log("Hi")
}, 2000)
 ```

 It has TWO things happening.

**Part 1 — Runs Immediately :**

```js
setTimeout(...)
```

>This runs immediately.<br> Browser gets instruction:<br>"Run this function later after 2 seconds."

**Part 2 — Runs Later**

This function:

```js
() => {
    console.log("Hi")
}
```

runs later.

<hr>