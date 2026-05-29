import { useCallback, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed]= useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += "1234567890";
    if(charAllowed) str += "@#$%&*?/!";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass = pass + str.charAt(char);
      
    }
    setPassword(pass)

  },[length, numAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      window.navigator.clipboard.writeText(password);
    }
  }, [password]);

  return(
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-700 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
           <input type="text" 
                   value= {password}
                   className="outline-none w-full py-1 px-3"
                   placeholder = "Password"
                   readOnly
                   ref = {passwordRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            >copy</button>
            <button
              onClick={passwordGenerator}
              className='outline-none bg-green-700 text-white px-3 py-0.5 shrink-0'
            >generate</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min = {6}
            max = {100}
            value = {length}
            className='cursor-pointer'
            onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length : {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" checked={numAllowed} onChange={() => setNumAllowed((prev) => !prev)} />
            <label>Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" checked={charAllowed} onChange={() => setCharAllowed((prev) => !prev)} />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
