import { useState } from 'react'
import './App.css'

export default function App() {
    const [input, setInput] = useState("Inital_value")

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className="MAIN_CONTAINER w-120 bg-green-100 p-5 rounded-lg flex flex-col justify-center  items-center">
                <h1 className="TITLE text-2xl font-semibold text-gray-500 border-b border-gray-500 p-5"
                >Live Input Preview Project</h1>

                <div className="INPUT_ROW flex items-center m-5 w-full">
                    <div className="INPUT text-lg px-2 py-1 ml-2 mr-8 text-green-500 font-bold">Input : </div>
                    <input type="text" placeholder='Enter some Text here' className='flex-1 border border-green-400 rounded px-2 py-1' 
                        onChange={(e)=>{setInput(e.target.value)}}
                    />
                </div>

                <div className="PREVIEW_ROW flex items-center m-2 w-full">
                    <div className="INPUT text-lg px-2 py-1 mx-2 text-blue-500 font-bold">Preview : </div>
                    <div className='flex-1 border border-blue-400 px-2p py-1 rounded text-center'>
                    {input}
                    </div>
                </div>
            </div>
        </div>
    )
}