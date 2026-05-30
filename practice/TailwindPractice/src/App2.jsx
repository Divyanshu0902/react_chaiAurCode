import './App.css'

export default function App() {
  return (
    <>
      <div className="MAIN_CONTAINER max-w-lg bg-yellow-100 rounded-lg flex flex-col p-5 m-10">
        <div className="ICON w-15 h-15 rounded-full border overflow-hidden border-2 border-green-600">
            <img src="/email.png" alt="email" />
        </div>
        <div className="TITLE font-semibold text-2xl">Join Our NewsLetter</div>
        <div className="SUBTITLE text-sm text-gray-500">Get the latest update daily</div>
        <div className="SUBSCRIBE flex items-center mt-5 gap-5">
            <input type="email" placeholder='Enter your Email' 
                   className='flex-1 border border-gray-400 rounded-md py-1 px-2'/>
            <button className="BUTTON whitespace-nowrap bg-green-600 text-white rounded-md px-2 py-1 hover:bg-green-800">Subscribe</button>
        </div>
      </div>
    </>
  );
}

