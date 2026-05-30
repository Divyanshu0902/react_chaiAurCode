import { useState } from "react";
import './App.css'

export default function App(){

    const [state,setState] = useState(0);

    return(
        <>
            <button
                className="bg-green-600 text-green-100 px-3 py-2 m-10 rounded-md"
                onClick = {()=>{
                    console.log(`Previous State: ${state}`);
                    setState(state+1);
                }}
                >Button
            </button>
        </>
    );
}