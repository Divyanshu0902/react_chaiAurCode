import { useState } from "react";
import './App.css'

export default function App(){

    const [showDetails, setShowDetails] = useState(false);

    return(
        <div className='flex w-full h-screen justify-center items-center bg-black'>
            <div className='rounded-lg bg-gray-900 flex flex-col min-w-100 max-w-md mx-auto justify-center  items-center p-5'>
                <h1 className='border-green-500 px-2 py-1 m-2 text-2xl font-semibold text-gray-400'>SHOW / HIDE TEXT - PROJECT</h1>

                <div className="PROFILE flex m-4 p-3 w-full border border-gray-600 rounded-md">
                    <div className="AVATAR w-18 h-18 rounded-full border-2 border-green-800 overflow-hidden">
                         <img src="/divyanshu.jpg" alt="" />
                    </div>

                    <div className="TEXT px-3 mx-3 flex flex-col justify-center items-center">
                        <div className="NAME text-2xl text-green-700">DIVYANSHU KUMAR</div>
                        <div className="PROFESSION text-md text-gray-500">Web Developer</div>
                    </div>
                </div>

                <div className="DETAILS w-full flex justify-end">
                    <button
                         className="SHOW_DETAILS text-xs p-0.5 text-green-900 bg-yellow-300 rounded"
                         onClick={()=>{
                            setShowDetails(prev=>!prev)
                         }}
                    >
                    {showDetails?"Hide":"Show Details"}
                    </button>
                </div>

                <div className="EXTRA_TEXT pt-3 mt-4 border-t  border-gray-500 w-full flex flex-col justify-start items-start">
                        {showDetails && 
                            <>
                                <h3 
                                    className="text-green-300 font-semibold "
                                >SKILLS :</h3>

                                <span
                                    className="text-xs text-gray-500"
                                    ><b>Frontend : </b>
                                    HTML, CSS, JavaScript, React
                                </span>

                                <span
                                    className="text-xs text-gray-500"
                                    ><b>Backend : </b>
                                    Django, Node, Express, SQL
                                </span>

                                <span
                                    className="text-xs text-gray-500"
                                    ><b>Tools : </b>
                                    Git, GitHub, VS Code
                                </span>

                                <div className="w-full border-t border-gray-500 my-4"></div>

                                <h3 
                                    className="text-green-300 font-semibold "
                                >EDUCATION :</h3>

                                <span
                                    className="text-xs text-gray-500"
                                    ><b>Graduation : </b>
                                    Heritage Instute of Technology, Kolkata
                                </span>

                                <span
                                    className="text-xs text-gray-500"
                                    ><b>Higher Secondary : </b>
                                    DPS International, Garhan, Muzaffarpur
                                </span>

                                <span
                                    className="text-xs text-gray-500"
                                    ><b>Matriculation : </b>
                                    RKMV Narendrapur, Kolkata
                                </span>
                            </>
                        }
                </div>
            
            </div>
        </div>
        
    )
}