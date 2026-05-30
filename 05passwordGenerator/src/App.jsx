import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {

    // useState() Hook :---
    const [length, setLength] = useState(10);
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    // useRef()  Hook :----
    const passwordRef = useRef(null)

    const copyToClipboard =  useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0,5);
        window.navigator.clipboard.writeText(password);
    }, [password])

    // useCallback() Hook :---
    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(numAllowed) str += "1234567890";
        if(charAllowed) str += "!@#%&*?/_";

        for (let i = 0; i < length; i++) {
            let index = Math.floor(Math.random()*str.length)+1
            pass = pass + str.charAt(index) 
        }

        setPassword(pass)
    }, [length,numAllowed,charAllowed,setPassword])

    // passwordGenerator(); --> This can't be called here - instead use the - useEffect Hook.
    // useEffect Hook :----
    useEffect(() => { passwordGenerator()}, [length,numAllowed,charAllowed,passwordGenerator])

  return(
    <div className="max-w-xl w-full mx-auto flex flex-col justify-center items-center mt-30 bg-blue-400 p-10 rounded-xl">
        <h1 className="text-xl text-center rounded-md border px-4 py-2 text-gray-200 shadow-2xl">
            Password Generator
        </h1>

        <div className="flex flex-col m-5 w-full bg-blue-100 text-blue-500 p-6 rounded-2xl gap-6">
            <div className="flex w-full border border-gray-400 rounded-2xl overflow-hidden">
                <input
                    type="text"
                    value = {password}
                    placeholder = "password"
                    readOnly
                    ref={passwordRef}
                    className="flex-1 px-3 py-2 outline-none"
                />

                <button 
                    className="bg-blue-600 hover:bg-blue-800 px-4 py-2 font-bold text-white"
                    onClick={copyToClipboard} 
                    >Copy
                </button>
            </div>

            <div className='flex gap-2 justify-center items-center'>
                <div>
                    <input 
                        type="range" 
                        min = {5}
                        max = {50}
                        value = {length}
                        onChange={(event) => {setLength(event.target.value)}}
                        className='cursor-pointer'
                    />

                    <span>Length: {length}</span>

                    <button 
                        className='bg-green-600 mx-2 px-2 text-white rounded-md'
                        onClick={() => setLength(50)}
                    >Max</button>
                </div>

                <div>
                    <input type="checkbox" 
                        checked = {numAllowed}
                        // onChange={()=>setNumAllowed((prev) => !prev)}
                        onChange={(event) => setNumAllowed(event.target.checked)}
                        className=''
                    />
                    <label>Number</label>
                </div>

                <div>
                    <input type="checkbox" 
                        checked =  {charAllowed}
                        onChange={(event)=>{setCharAllowed(event.target.checked)}}
                        className=''
                    />
                    <span>Character</span>

                </div>
            </div>
        </div>
    </div>
  )
}

export default App
