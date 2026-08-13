import './App.css'

export default function CenteredCard() {
    return (
        <>
            <div className='bg-amber-100 flex flex-col border-2 border-gray-500 rounded-lg max-w-md p-10 m-20 '>
                <div className='w-15 h-15 bg-gray-400 rounded-full border-2 border-green-700 overflow-auto'>
                    <img src="/email.png" alt="img" />
                </div>
                <h3 className="font-extrabold text-3xl text-green-800">
                    Join our Newsletter
                </h3>
                <p className="font-md text-sm text-gray-500">
                    Get the latest updates directly in your inbox.
                </p>
                <div>
                    <input type="email" placeholder='Enter Your Email here' 
                            className='border rounded-md mt-5 border-gray-400 px-2 py-1 flex-1' />
                    <button className='bg-green-600 rounded-sm text-white px-2 py-1 ml-2 hover:bg-green-800'>Subscribe</button>
                </div>
            </div>
        </>
    );
}