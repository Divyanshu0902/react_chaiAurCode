import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed]= useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += "1234567890";
    if(charAllowed) str += "@#$%&*?/!"
  },[length, numAllowed, charAllowed, setPassword]);

  return(
    <>
      <h1 className='text-4xl text-center text-white'
      >Password-Generator
      </h1>
    </>
  )
}

export default App
