import {useState} from 'react';

function App() {
  // using the useState hook for changing the value of counter : 
  let [counter, setCounter] = useState(10);
  
  const incrementValue = () => {
    // counter = counter + 1;  // It works in vanilla JS but...
    setCounter(counter+1);     //...in React we use hooks.
  }  

  const decrementValue = () => {
    setCounter(counter-1);
  }

  const resetValue = () => {
    setCounter(0);
  }

  return (
    <>
      <h1>Counter App</h1>
      <p>This is a simple counter App.</p>
      <p>The counter increases on pressing increase button and decreases on pressing decrease button.</p>
      <br /><br />

      <h2>Counter Value: {counter}</h2>
      <br /> <br />

      <button
        onClick = {incrementValue}
      >Increase</button>

      <button
      onClick = {decrementValue}
      >Decrease</button>
      <br /> <br />

      <button
      onClick = {resetValue}
      >Reset Counter</button>

      <footer>Counter is : {counter}</footer>
    </>
  )
}

export default App
