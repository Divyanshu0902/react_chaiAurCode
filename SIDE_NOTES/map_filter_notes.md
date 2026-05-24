# JavaScript map() & filter() Notes

## filter()

Used to keep only items that match a condition.

### Syntax

```js
array.filter((item) => {
    return condition
})
```

### Example

```js
const adults = users.filter(user => user.age >= 18)
```

Returns (TRUE) for only matching items.

---

## map()

Used to transform every item.

### Syntax

```js
array.map((item) => {
    return transformedValue
})
```

### Example

```js
const names = users.map(user => user.name)
```

Transforms objects into names.

---

# Difference

| Method | Purpose |
|---|---|
| filter() | Select items |
| map() | Transform items |

---

# Important Arrow Function Rule

## With {}

Must use `return`

```js
x => {
   return x.age > 18
}
```

## Without {}

Automatic return

```js
x => x.age > 18
```

---

# Chaining

```js
const result = products
    .filter(product => product.price > 1000)
    .map(product => product.name)
```

---

# Mental Model

## filter()

"Should I keep this item?"

Returns:
- true
- false

---

## map()

"What should this item become?"

Returns:
- transformed value
