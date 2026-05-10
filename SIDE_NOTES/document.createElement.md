# Intro
In JavaScript, document.createElement() is a built-in method used to create a new HTML element programmatically. It is a fundamental part of DOM manipulation, allowing you to build parts of a webpage dynamically without writing them directly in the HTML file

# How It Works
When you call this method, it creates the element in memory, but it does not automatically appear on the page. You must follow a three-step process to use it effectively:
- Create: Use document.createElement("tagName") to generate the element (e.g., a <div>, <p>, or <span>).
- Configure: Add content, styles, or attributes to the new element using properties like .textContent, .className, or .setAttribute().
- Attach: Insert the element into the Document Object Model (DOM) using methods like .appendChild() or .prepend() so it becomes visible to the user

# Syntax Example : 
```javascript
// 1. Create a new <button> element
const btn = document.createElement("button");

// 2. Configure it
btn.textContent = "Click Me!";
btn.style.backgroundColor = "blue";

// 3. Attach it to the <body> of the page
document.body.appendChild(btn);

```