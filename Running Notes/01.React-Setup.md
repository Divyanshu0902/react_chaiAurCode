# #.Setup Commands :-

**To setup React from scratch :**

```powershell
npx create-react-app app_name
```
**2.To setup Vite :**
```
npm create vite@latest
```

- then select the right options . 
- i.e. Reeact -> JavaScript -> install
- then `npm i` for installing all the packages from **package.json**
<br>
<hr>
<br>

> **package.json** is the *centralized index* of the whole react project.

# #.Understanding the Files and Folders :
- CRA has **App.js** (for Developer Logic) and **index.js** (which imports and bundles all of - React, React-DOM and App together.)

- Vite has **App.jsx** (for Developer Logic) and **Main.jsx** (which imports and bundles all of - React, React-DOM and App together.)

<hr>

# NOTES

## Returning Multiple elements in JSX :
Just use empty paranhesis to enclose multiple elements like this --
```jsx
<>
    <h1>Heading</h1>
    <p>This is a paragraph</p>
</>
```
and put it inside the `return(<></>)` of the function.  

## The name of any React component(function) must start with Capital letter
 in order for it to be used as a custom tag and it does not confuse react for an HTML Tag <br>
e.g. : 
```jsx
function Testfn() {
    return (
        <>
            <h1>Heading</h1>
            <p>Paragraph line</p>
        </>
    )
}
```

>then it can be used with the tag - `<Testfn />`