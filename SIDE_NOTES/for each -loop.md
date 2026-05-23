## Step 1 — What is `forEach()`?

`forEach()` is a method used to:

- go through every item one-by-one in a collection

- Example collection:

```js 
const fruits = ["apple", "banana", "mango"]
```

-Now suppose you want to print every fruit.

**Without forEach():**

```js
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
```

*Bad approach.*

**forEach() solves this**
```js
fruits.forEach(function(fruit) {
    console.log(fruit)
})
```

Output:

```
apple
banana
mango
```


forEach() is basically a loop

It is *similar to:*

```js
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}
```

But cleaner.