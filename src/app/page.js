'use client'
import { useState } from 'react';
import HomePage from '../components/home';
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <>
      <div className="fixed top-0 right-0 left-0 py-4 px-8 sm:px-16 lg:px-32 cursor-pointer bg-gradient-to-r from-blue-200 via-purple-700 to-pink-800 shadow-lg z-50">
        <div className="flex justify-between items-center text-white">
          <div>
            <h2 className="text-lg">Zeke App</h2>
          </div>

          <div className="lg:flex justify-between space-x-10 hidden">
            <select className="outline-none bg-transparent cursor-pointer hover:text-red-300">
              <option value="Company">Company</option>
              <option value="Company One">Company One</option>
              <option value="Company Two">Company Two</option>
            </select>

            <h2 className='hover:text-red-300'>Product</h2>
            <h2 className='hover:text-red-300'>Blog</h2>
          </div>

          <div className="hidden lg:flex space-x-10">
            <a href="#" className='hover:text-red-300 hover:border-l-2 border-r-2 px-3 rounded-full border-white'>Sign Up</a>
            <a href="#" className='hover:text-red-300 text-pink-600 border bg-white hover:bg-transparent rounded-full px-5 pt-1'>Login</a>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={handleClick}>
              {toggle ? <MdClose /> : <RxHamburgerMenu />}
            </button>
          </div>
        </div>

        <div className={toggle ? "lg:hidden h-[70vh] text-white flex flex-col" : "hidden"}>
          <div className="flex flex-col items-center space-y-12 py-12">
            <select className="outline-none bg-transparent cursor-pointer hover:text-red-300">
              <option value="Company">Company</option>
              <option value="Company One">Company One</option>
              <option value="Company Two">Company Two</option>
            </select>

            <h2 className='hover:text-red-300'>Product</h2>
            <h2 className='hover:text-red-300'>Blog</h2>
          </div>
          
          <div className="flex flex-col items-center space-y-12 mt-4">
            <a href="#" className='hover:text-red-300 hover:border-l-2 border-r-2 px-3 rounded-full border-white'>Sign Up</a>
            <a href="#" className='hover:text-red-300 text-pink-600 border bg-white hover:bg-transparent rounded-full px-5 pt-1'>Login</a>
          </div>
        </div>
      </div>
      
      <HomePage />
    </>
  );
}
