import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { AiOutlineRead } from "react-icons/ai";
import { MdModelTraining } from "react-icons/md";
import { MdDone } from "react-icons/md";

const App = () => {
  return (
    <div>
      <>
        <div className='min-h-screen bg-zinc-50'>
          <nav className='justify-between mx-8 my-1'>
            <ul className='flex items-center justify-between'>
              <li>
                <img className='h-28' src="/logo.png" alt="" />
              </li>
              <li>
                <button className='bg-black py-2 px-5 hover:bg-slate-900 rounded-full text-white'> Sign in</button>
              </li>
            </ul>
          </nav>

        {/* Hero Section  */}

          <div className='flex gap-12'>

            {/* Left-side */}
            <div className='ml-20 mt-3 w-2/4'>
              <img className='bg-black h-96 rounded-lg' src="/driving.jpg" alt="" />
            </div>

            {/* Right-side */}
            <div className='mr-10 w-4/5 mt-4'>

              <div>
                <h1 className='text-3xl font-semibold'> Vehicle-for-Hire & Private Transportation
                  Company (PTC) Training <span className='ml-2 text-2xl font-light'> (City of Toronto) </span> </h1> 
              </div>

              <div className='flex items-center gap-4'>

                <div className='px-4 py-1.5 mt-2 rounded-2xl bg-red-600 text-white'>
                  <h1> Online</h1>
                </div>

                <div className='flex gap-1 text-red-600 text-2xl'>
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                </div>

                <div className='flex gap-2'>
                  <h1> 27 reviews</h1>
                  <h1> / </h1>
                  <a className='underline' href=""> Write a review</a>
                </div>

              </div>

              <div className='flex gap-2 mt-4'>
                <h1 className='text-2xl text-zinc-400 line-throughs'> $84.95</h1>
                <h1 className='text-2xl font-bold text-red-600'> $74.95</h1>
              </div>

            <div className='mt-2 w-11/12'>
              <h1 className='font-semibold'> Description:</h1>
              <h1> Meet licensing requirements with this accredited online program.
                The Toronto's Vehicle-for-Hire and Private Transportation Company (PTC)
                Training provides essential training for taxi, limousine, and rideshare drivers
                (Uber, Lyft, Facedrive) to operate safely and successfully in Toronto, Ontario.
                
                <br />
                <span className='font-semibold'>Testing centre is located near Don Mills Road & Eglinton Avenue East.</span></h1>
            </div>

            <div className='mt-8'>
              <div className='flex gap-4'>
                <button className='px-6 py-3 bg-zinc-200 rounded-md text-black hover:bg-zinc-300'> Quantity:1</button>
                <button className='px-6 py-3 bg-black rounded-md text-white hover:bg-zinc-900'> Add to cart</button>
              </div>
            </div>
            </div>
          </div>

        {/* Three steps  */}
          <div className='bg-zinc-950 w-full h-36 mt-12 flex flex-col items-center justify-center'>
            <div className='flex text-white gap-32'>

              <div className='flex flex-col items-center justify-center'>
                <div className='text-red-500 text-5xl'>
                  <AiOutlineRead />
                </div>
               
                <h1>
                  Read and watch course material
                </h1>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <div className='text-red-500 text-5xl'>
                  <MdModelTraining />
                </div>
                <h1 className='w-56 text-center'>
                Choose between
                in person and online training
                </h1>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <div className='text-red-500 text-5xl'>
                  <MdDone />
                </div>
                <h1>
                  Complete your test
                </h1>
              </div>

            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default App