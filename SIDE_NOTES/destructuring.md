# Destructuring

- Destructuring is a JavaScript feature that allows you to extract sections of data from an array or object

-  Let's look at a brief **example** of how this works :
- Let’s say we have an array of todos and want to get the first two elements in that array. An old way would be to do it like this:

```js
const todo = ["bath","sleep","eat"];
// old way
const firstTodo = todo[0];//bath
const secondTodo = todo[1];//sleep

console.log(firstTodo);
console.log(secondTodo);
```

- Destructuring offers a much easier way to do this:

```js
const todo = ["bath","sleep","eat"];

// destructuring
const [firstTodo, secondTodo] = todo;// bath, sleep

console.log(firstTodo);
console.log(secondTodo);
```

## More on this topic : 
- (Nested Array, Object, nested Object destructuring etc.)
- [Read Article](https://www.freecodecamp.org/news/destructuring-in-javascript/)