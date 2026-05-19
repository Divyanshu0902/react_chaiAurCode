# JavaScript `for...in` Loop

The `for...in` loop in JavaScript is used to iterate over the **keys (property names)** of an object.

---

# Syntax

```javascript
for (let key in object) {
    // code
}
```

- `key` → property name
- `object` → object being iterated

---

# Basic Example

```javascript
const person = {
    name: "Divyanshu",
    age: 20,
    city: "Kolkata"
};

for (let key in person) {
    console.log(key);
}
```

## Output

```text
name
age
city
```

It prints the **property names**, not the values.

---

# Getting Values Too

```javascript
const person = {
    name: "Divyanshu",
    age: 20,
    city: "Kolkata"
};

for (let key in person) {
    console.log(key, person[key]);
}
```

## Output

```text
name Divyanshu
age 20
city Kolkata
```

---

# Important Concept

Inside the loop:

```javascript
key
```

contains:

```text
"name"
"age"
"city"
```

So:

```javascript
person[key]
```

means:

```javascript
person["name"]
person["age"]
person["city"]
```

which accesses the values.

---

# Visual Understanding

Object:

```javascript
const person = {
    name: "Divyanshu",
    age: 20
};
```

Iteration flow:

```text
1st loop:
key = "name"

2nd loop:
key = "age"
```

---

# `for...in` with Arrays

You *can* use it with arrays:

```javascript
const arr = ["a", "b", "c"];

for (let index in arr) {
    console.log(index);
}
```

## Output

```text
0
1
2
```

Because array indexes are actually object keys.

---

# Access Array Values

```javascript
const arr = ["a", "b", "c"];

for (let index in arr) {
    console.log(arr[index]);
}
```

Output:

```text
a
b
c
```

---

# But Usually Avoid `for...in` for Arrays

Because:

- it iterates over keys
- order can sometimes be problematic
- it can include inherited properties

Instead use:

```javascript
for...of
```

for arrays.

---

# Difference: `for...in` vs `for...of`

| Loop | Iterates Over |
|---|---|
| `for...in` | keys / property names |
| `for...of` | values |

---

# Example

## `for...in`

```javascript
const arr = ["a", "b", "c"];

for (let x in arr) {
    console.log(x);
}
```

Output:

```text
0
1
2
```

---

## `for...of`

```javascript
const arr = ["a", "b", "c"];

for (let x of arr) {
    console.log(x);
}
```

Output:

```text
a
b
c
```

---

# Real-World Object Example

```javascript
const student = {
    name: "Rahul",
    marks: 85,
    passed: true
};

for (let property in student) {
    console.log(property + ": " + student[property]);
}
```

Output:

```text
name: Rahul
marks: 85
passed: true
```

---

# Important Notes

## 1. Works Mainly for Objects

Best use case:

```javascript
const obj = { ... }
```

---

## 2. Returns String Keys

Even array indexes are strings internally:

```javascript
"0"
"1"
"2"
```

---

## 3. Includes Enumerable Properties

It loops through enumerable object properties.

(Advanced topic for later.)

---

# Summary

| Feature | `for...in` |
|---|---|
| Used for | Objects |
| Iterates over | Keys / property names |
| Array use | Possible but not recommended |
| Access values | `object[key]` |

---

# Easy Memory Trick

```text
for...in  → INdex / keys
for...of  → actual values OF collection
```