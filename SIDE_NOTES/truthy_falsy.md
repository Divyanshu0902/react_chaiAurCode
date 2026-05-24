# Truthy and Falsy Values

JavaScript converts values into true or false when needed.

---

## Falsy Values

These become false:

```js
false
0
-0
0n
""
null
undefined
NaN
```

---

## Truthy Values

Everything else is truthy.

Examples:

```js
"hello"
1
[]
{}
"0"
```

---

## Boolean Conversion

```js
Boolean(value)
```

Examples:

```js
Boolean(0) // false
Boolean("hello") // true
Boolean([]) // true
```

---

# filter() Important Concept

filter() keeps elements only when callback returns truthy value.

---

## Correct Way

```js
let evenNum = num.filter(n => n % 2 == 0);
```

---

## Why This Works

```js
n % 2 == 0
```

already returns:

- true
- false

---

## Your Version Also Works

```js
num.filter((n)=>{
   if(n % 2 == 0){
      return n;
   }
})
```

Why?

- even numbers return `2,4,6...` → truthy
- odd numbers return `undefined` → falsy

---

# map() vs filter()

## map()

Transforms values.

```js
arr.map(x => x * 2)
```

---

## filter()

Checks conditions.

```js
arr.filter(x => x > 5)
```

