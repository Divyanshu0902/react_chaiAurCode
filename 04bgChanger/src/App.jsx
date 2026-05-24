import { useState } from 'react'
import "./App.css"

function App() {
  const [color, setColor] = useState("brown")

  return (
    <div
      className="w-full h-screen duration-200 transition-all"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-1 rounded-xl">
          
          <button className="outline-none px-4 py-1 text-white my-3 mx-2 rounded-md" 
          onClick={()=>{setColor("red")}}
          style = {{backgroundColor: "red"}}>
            Red
          </button>

          <button className="outline-none px-4 py-1 text-white my-3 mx-2 rounded-md"
          onClick={()=>{setColor("green")}}
          style = {{backgroundColor: "green"}}>
            Green
          </button>

          <button className="outline-none px-4 py-1 text-white bg-blue-500 my-3 mx-2 rounded-md"
          onClick={()=>{setColor("blue")}}
          style = {{backgroundColor: "blue"}}>
            Blue
          </button>

          <button className="outline-none px-4 py-1 text-white  my-3 mx-2 rounded-md"
          onClick={()=>{setColor("olive")}}
          style = {{backgroundColor: "olive"}}>
            Olive
          </button>

          <button className="outline-none px-4 py-1 text-white my-3 mx-2 rounded-md"
          onClick={()=>{setColor("orange")}}
          style = {{backgroundColor: "orange"}}>
            Orange
          </button>

        </div>

      </div>

    </div>
  )
}

export default App
