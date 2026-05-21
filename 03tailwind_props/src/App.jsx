// import { useState } from 'react'
import './App.css'
import Card from '../components/Card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h2 className='inline-block w-max bg-green-400 px-3 py-2 leading-none rounded-sm'>
        Divyanshu Kumar
      </h2>

      < Card 
        name = "Divyanshu"
        desc = "I am a frontend developer specializing in React JS. I am also interested in learning about AI and ML."
        btn = "Know More"
      />

      < Card 
        name = "Ronak"
        desc = "I am an ML Engineer specializing in SciKitLearn, RAG, Vector Databases and CNN, RNNs."
        btn = "My💓Titli"
      />
      
    </>
  )
}

export default App

