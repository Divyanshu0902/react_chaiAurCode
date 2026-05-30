# Deep Dive: JavaScript Scoping and React's `useState` Hook

## Divyanshu's Doubt

When using the `useState` hook in React, we destructure its returned array into a `const` array like this:

```javascript
const [state, setState] = useState(initial_value);
```

Since the value of `state` keeps changing over time as the application runs, how can we store it inside a `const` variable named `state`?

The solution and underlying intuition can be derived from the following core JavaScript concept:

```javascript
function greet(name) {
    const message = `Hello ${name}! Nice to see you!`;
    return message;
}

greet("divyanshu");
greet("rohit");
greet("priyanshu");
```

Output:

```text
Hello divyanshu! Nice to see you!
Hello rohit! Nice to see you!
Hello priyanshu! Nice to see you!
```

## The Intuition

In the snippet above, the output changes dynamically even though `name` and `message` are handled within the function scope. We get different values every time because we are invoking the `greet` function separately for each name.

Every single function call creates a completely fresh function scope. While a `const` variable cannot be reassigned within the same execution scope, it can absolutely be declared with a completely different value in a completely different function call or scope execution.

Similarly, every time `setState()` is executed, React might be declaring a completely new state variable inside a fresh execution of the function component, assigning it the updated value in an entirely separate function scope.

## Gemini's Answer

Your intuition is correct. You have identified the bridge between vanilla JavaScript execution contexts and how React manages component rendering.

### 1. The Core Pillar: Function Execution Contexts

A `const` variable is immutable only within its specific execution context. Every time a JavaScript function is invoked, the engine executes it inside a brand-new execution context with its own isolated scope.

```javascript
// Execution Context / Scope #1
const state = "initial";

// Execution Context / Scope #2
const state = "updated";
```

When a function finishes executing, its local variables are typically cleaned up unless preserved by closures. When called again, the variables inside are initialized fresh.

### 2. How This Applies Directly to React

React functional components are just JavaScript functions.

When you call `setState`, React does **not** mutate the current `const state` variable. Instead:

1. React updates an internal state storage location.
2. React schedules a re-render.
3. React invokes the component function again.
4. A brand-new `state` constant is created in the new render scope.

#### Initial Render (Scope #1)

- React creates internal storage for the state.
- `useState(initialValue)` returns the initial value.
- `const [state, setState]` binds `state` to that value.
- JSX is rendered using that snapshot.

#### State Update

```javascript
setState(newValue);
```

This updates React's internal storage, not the current render's `state` variable.

#### Re-render (Scope #2)

- React invokes the component again.
- `useState()` reads the updated value.
- A new `const state` variable is created.
- JSX renders with the new state snapshot.

### 3. Visual Lifecycle Matrix

| Lifecycle Phase | React Internal Storage | Component Scope | Local `state` |
|----------------|-----------------------|----------------|---------------|
| Render 1 | "divyanshu" | Scope #1 | `const state = "divyanshu"` |
| setState("rohit") | Updated to "rohit" | Scope #1 finishes | Remains immutable |
| Render 2 | "rohit" | Scope #2 | `const state = "rohit"` |

## Conclusion

The variable itself is never reassigned.

Instead, React creates a **new render**, which creates a **new execution context**, which creates a **new `const state` variable** initialized with the latest value stored in React's internal state system.

Each render receives its own immutable snapshot of state, which is why using `const` is completely valid.
