// import { useState } from 'react'
import './App.css'

export default function App() {
  return (

  //problem 1: Center a div
    // <div className='flex h-screen justify-center items-center'>
    //   <div className="flex justify-center items-center border-2 border-gray-300 p-5 rounded-lg"> 
      
    //   <div className="bg-blue-500 p-10 text-white rounded-md">
    //     <h1>Login Card</h1>
    //   </div>

    //   </div>
    // </div>

// problem 2: Make an Profile/Avatar bar

    // 1. Make this a flex container, align items vertically in the center, and give it some padding all around.
    // <div className="inline-flex items-center p-8 border rounded-md m-4 border-green-100 ">
      
    //   {/* 2. Give this avatar a fixed width and height of 12 units (48px), make it a perfect circle, and push it away from the text using right margin */}
    //   <div className="bg-gray-400 mr-3 w-12 h-12 rounded-full overflow-hidden">
    //     <img src="/divyanshu.jpg" alt="divyanshu"/>
    //   </div>
      
    //   <div>
    //     <h2 className="font-bold">Divyanshu Kumar</h2>
    //     <p className="text-gray-500 text-sm">Active 5m ago</p>
    //   </div>

    //   {/* 3. Push this badge all the way to the far right side of the row automatically using a margin trick (Hint: traditional CSS uses margin-left: auto) */}
    //   <span className="ml-40 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
    //     Online
    //   </span>

    // </div>


    // Problem 3 : Pricing Card

    // <div>
    //    {/* Give this card container a max-width of 'sm' (max-w-sm), a white background, a medium shadow, large rounded corners, a 1px border, and substantial padding (p-6) */}
    //   <div className="max-w-sm mx-auto bg-white shadow border rounded-lg p-6 m-10">
        
    //     <div className='w-full h-60 bg-gray-300 rounded-md'></div>

    //     <span className="inline-block mt-4 text-xs font-semibold bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
    //       POPULAR
    //     </span>
        
    //     {/* 2. Make the price text huge (3xl), bold, and very dark gray (text-gray-900). Add a tiny top margin to separate it from the badge. */}
    //     <h3 className="text-3xl font-bold text-gray-900 mt-2">$29<span className="text-base font-normal text-gray-500">/mo</span></h3>
        
    //     <p className="text-gray-500 text-sm mt-2 mb-6">
    //       Perfect for growing developers who need reliable, scalable integration.
    //     </p>

    //     {/* 3. Style this button: Full width, background color blue-600, white text, medium font weight, center-aligned text, vertical padding of 3, horizontal padding of 4, and rounded corners. */}
    //     <button className="w-full bg-blue-600 hover:bg-blue-800 text-white font-medium py-3 px-4 rounded mt-4">
    //       Buy Premium Plan
    //     </button>

    //   </div>
    // </div>


    // Problem 4: Newsletter Subscription
    
    <>
        {/* 1. Main Container: Fixed max-width, centered, vertically stacked */}
    <div className=" m-10 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      
      {/* The heading sits naturally on top */}
      <h3 className="text-xl font-bold text-gray-900 mb-1">
        Join our Newsletter
      </h3>
      <p className="text-sm text-gray-500 mb-4">
        Get the latest updates directly in your inbox.
      </p>

      {/* 2. Row Wrapper: Forces children side-by-side, adds a gap between them */}
      <div className="flex items-center gap-2">
        
        {/* flex-1 makes the input expand to take up all remaining available space */}
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-blue-500"
        />
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-4 py-2 rounded-lg transition-colors">
          Subscribe
        </button>

      </div>

    </div>
    </>

  );
}

