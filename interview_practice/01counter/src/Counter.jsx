import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex w-full h-screen justify-center items-center'>
        <div className='rounded-lg bg-yellow-100 flex flex-col min-w-100 max-w-md mx-auto justify-center  items-center'>
          <h1 className='border-green-500 px-2 py-1 m-2 text-2xl font-semibold text-gray-400'>COUNTER PROJECT</h1>
          <div className="DISPLAY flex justify-center items-center m-5 gap-5 ">
            <div className="label text-lg ">Current Value : </div>
            <input type="text" className="rounded w-20 border border-blue-400 px-2 py-1 text-2xl text-center font-bold text-blue-600"
              value={count}
            />
          </div>

          <div className="BUTTONS flex justify-center items-center m-1 border-t border-gray-400 p-3">
            <button className="INC px-2 py-1 bg-green-500 rounded-md text-white m-4"
              onClick={()=>{setCount(count => count+1)}}
            >Increase</button>

            <button className="INC px-2 py-1 bg-blue-500 rounded-md text-white m-4"
              onClick={()=>{setCount(0)}}
            >Reset</button>

            <button className="INC px-2 py-1 bg-red-500 rounded-md text-white m-4"
              onClick={()=>{setCount(count => count-1)}}
            >Decrease</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
