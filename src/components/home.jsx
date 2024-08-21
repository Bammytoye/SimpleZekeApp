import React from 'react'
import Image from 'next/image'
import { TiStarOutline } from "react-icons/ti";
import { IoLogoGooglePlaystore, IoLogoApple } from "react-icons/io5";

const home = () => {
    return (
        <div>
            {/* first component */}
            <div className="pt-32 px-32 py-32 cursor-pointer h-[580px] shadow-xl bg-gradient-to-r from-blue-200 via-purple-700 to-pink-800 shadow-gray-300 rounded-br-[500px] rounded-tl-[300px]">
                <div className='flex flex-col justify-center items-center space-y-6 text-white'>
                    <h2 className='font-extrabold text-4xl'>
                        Discover the social side of Cashout
                    </h2>

                    <p className='text-sm text-gray-200'>
                        A platform for accepting payment, making payments and paying bills
                    </p>

                    <div className='flex space-x-10'>
                        <button className='border hover:bg-transparent hover:text-white rounded-sm bg-white px-7 py-1 text-black text-[13px]'>Get Started</button>
                        <button className='border hover:text-black hover:bg-gradient-to-r from-blue-300 via-blue-100 to-blue-800 rounded-sm bg-transparent px-5 py-1 text-[13px]'>Join Our Community</button>
                    </div>

                    <div className="pt-20">
                        <Image src="/image/Cashout 1.png" alt='HomePix' width='300' height='300'/>
                    </div>
                </div>
            </div>

            {/* second component */}
            <div className='flex justify-center items-center px-48 py-32'>
                <div className="flex justify-between items-center space-x-10 px-10 py-12 border shadow-2xl shadow-blue-200 rounded-tr-[100px] rounded-bl-[100px]">
                    <div className='flex flex-col justify-center items-center space-y-1 text-center border-r-2 border-gray-600 px-12'>
                        <Image src="/image/tech.png" alt='Sign Up' width='50' height='50'/>
                        <h3 className='font-bold text-gray-600 cursor-pointer'>
                            Sign Up
                        </h3>
                        
                        <p className='text-sm text-gray-900'>
                            Create a profile and confirm your identity. Its that simple to begin your crypto journey. Lets go!! 
                        </p>
                    </div>

                    <div className='flex flex-col justify-center items-center space-y-1 text-center border-r-2 border-gray-600 px-12'>
                        <Image src="/image/tech.png" alt='Sign Up' width='50' height='50'/>
                        <h3 className='font-bold text-gray-600 cursor-pointer'>
                            Save Funds
                        </h3>
                        
                        <p className='text-sm text-gray-900'>
                            Create a profile and confirm your identity. Its that simple to begin your crypto journey. Lets go!! 
                        </p>
                    </div>

                    <div className='flex flex-col justify-center items-center space-y-1 text-center px-10'>
                        <Image src="/image/tech.png" alt='Sign Up' width='50' height='50'/>
                        <h3 className='font-bold text-gray-600 cursor-pointer'>
                            Make Payment
                        </h3>
                        
                        <p className='text-sm text-gray-900'>
                            Create a profile and confirm your identity. Its that simple to begin your crypto journey. Lets go!! 
                        </p>
                    </div>
                </div>
            </div>

            {/* third component */}
            <div className="py-10">
                <div className='flex justify-center space-x-32 items-center px-44 py-7'>
                    <div>
                        <Image src="/image/thrid.png" alt="phone" width="300" height="300"/>
                    </div>

                    <div className='flex flex-col items-start space-y-6'>
                        <h3 className="font-extrabold text-[28px] font-sans">
                            Let your money do your work
                        </h3>

                        <p className="w-[380px] text-gray-800 text-md">
                            Trust Bundle leveraged tokens to save the day even when there is a market dip
                        </p>

                        <a href="#" className="border px-8 py-2 bg-blue-800 text-gray-300 hover:text-white text-sm rounded-md">
                            Beat the Dip
                        </a>
                    </div>
                </div>
            </div>

            {/* fourth component */}
            <div className="px-32 py-10">
                    <div className="flex flex-col justify-center items-center space-y-20">
                        <div className="flex justify-between items-center space-x-10">
                            <div className="w-[400px] space-y-5">
                                <h3 className="text-4xl font-extrabold font-sans">
                                    Start Selling on the Cashout App
                                </h3>

                                <p className="text-sm text-gray-700 pb-6">
                                    Save and earn interest on your dollar stable cryptocurrency with bundle vault - No risk involved 
                                </p>

                                <a href="#" className="border px-8 py-2 bg-blue-800 text-gray-300 hover:text-white text-sm rounded-md">
                                    Start Now
                                </a>
                            </div>

                            <div>
                                <Image src="/image/fourth.png" alt="" width="300" height="700"/>
                            </div>

                            <div className="space-y-4">
                                <div className="flex space-x-3 font-sm text-sm font-sans">
                                    <TiStarOutline />
                                    <p>
                                        Use the easypay to start making profit  
                                    </p>
                                </div>

                                <div className="flex space-x-3 font-sm text-sm font-sans">
                                    <TiStarOutline />
                                    <p>
                                        Use the easypay to start making profit  
                                    </p>
                                </div>

                                <div className="flex space-x-3 font-sm text-sm font-sans">
                                    <TiStarOutline />
                                    <p>
                                        Use the easypay to start making profit  
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center space-y-4">
                            <h3 className="text-4xl font-extrabold font-sans">
                                New to Cashout? We've got you covered 
                            </h3>

                            <p className="text-sm text-gray-700 pb-6">
                                Save and earn interest on your dollar stable cryptocurrency with bundle vault - No risk involved 
                            </p>
                            
                            <a href="#" className="border px-8 py-2 bg-blue-800 text-gray-300 hover:text-white text-sm rounded-md">
                                Learn about Cashout
                            </a>
                        </div>

                        <div>
                            <Image src="/image/fourth(2).png" alt="" width="300" height="300" />
                        </div>
                    </div>
            </div>

            {/* fifth component */}
            <div className="bg-gradient-to-r from-blue-200 via-purple-700 to-pink-800 shadow-2xl">
                <div className="px-52 py-20 flex justify-evenly items-center space-x-20">
                    <div className="w-[400px] space-y-5">
                        <h3 className="text-3xl font-extrabold font-sans w-[450px] text-gray-200">
                                New to Cashout? We've got you covered 
                        </h3>

                        <p className="text-sm pb-6 text-white">
                            Save and earn interest on your dollar stable cryptocurrency with bundle vault - No risk involved 
                        </p>
                            
                        <a href="#" className="border border-blue-800 px-8 py-2 bg-blue-800 text-gray-300 hover:text-white text-sm rounded-md">
                            Learn about Cashout
                        </a>
                    </div>

                    <div>
                        <Image src="/image/fourth(2).png" alt="" width="200" height="200" />
                    </div>
                </div>
            </div>
    
            {/* sixth component */}
            <div className="p-48">
                <div className="flex flex-col space-y-3 justify-center items-center bg-slate-100 px-32 py-20 border shadow-2xl shadow-blue-200 rounded-tr-[100px] rounded-bl-[100px]">
                    <h3 className="text-3xl font-extrabold font-sans text-blue-800">
                        Download the Cashout App
                    </h3>

                    <p className="text-center text-sm text-gray-700">
                        Join about 2 million people who buy sell, pay & get paid with ZekeApp. No commission on any payments you receive.
                    </p>

                    <div className="flex space-x-2 justify-center items-center">
                        <div className="flex items-center space-x-3 border px-5 py-2 text-sm hover:rounded-br-2xl rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl border-blue-300 bg-white cursor-pointer">
                            <IoLogoGooglePlaystore className="text-2xl text-[#27837e]"/>

                            <div>
                                <p>
                                    Get it on
                                </p>
                                <span>
                                    Google Play
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3 border px-5 py-2 text-sm hover:rounded-br-2xl rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl border-blue-300 bg-white cursor-pointer">
                            <IoLogoApple className="text-2xl"/>

                            <div>
                                <p>
                                    Download on the 
                                </p>
                                <span>
                                    App Store
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer */}
            <div className="px-32 py-28 cursor-pointer shadow-xl bg-gradient-to-r from-blue-200 via-purple-700 to-pink-800 shadow-gray-300">
                <div className="flex justify-between items-start">
                    <div className="space-y-10">
                        <h3 className="uppercase text-white font-sans">
                            Cashout
                        </h3>

                        <p className="w-[200px] font-bold text-white">
                            Social Payment For Cash and Payment Transfer
                        </p>

                        <div className="flex space-x-2 items-center">
                            <div className="flex items-center space-x-3 border px-5 py-2 text-sm hover:rounded-br-2xl rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl border-white bg-transparent text-white cursor-pointer">
                                <IoLogoGooglePlaystore className="text-2xl text-[#27837e]"/>

                                <div>
                                    <p>
                                        Get it on
                                    </p>
                                    <span>
                                        Google Play
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 border px-5 py-2 text-sm hover:rounded-br-2xl rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl border-white bg-transparent text-white cursor-pointer">
                                <IoLogoApple className="text-2xl"/>

                                <div>
                                    <p>
                                        Download on the 
                                    </p>
                                    <span>
                                        App Store
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-10">
                        <h3 className="uppercase text-gray-200 font-sans">
                            Company
                        </h3>

                        <ul className="space-y-3 text-gray-200">
                            <li>
                                About Us
                            </li>

                            <li>
                                Careers
                            </li>

                            <li>
                                Contact
                            </li>

                            <li>
                                Affiliate Program
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-10">
                        <h3 className="uppercase text-gray-200 font-sans">
                            Help
                        </h3>

                        <ul className="space-y-3 text-gray-200">
                            <li>
                                Blog
                            </li>

                            <li>
                                FAQ
                            </li>

                            <li>
                                Report a Bug
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-10">
                        <h3 className="uppercase text-gray-200 font-sans">
                            Product
                        </h3>

                        <ul className="space-y-3 text-gray-200">
                            <li>
                                Trade
                            </li>

                            <li>
                                Vault
                            </li>

                            <li>
                                Bundle Leveraged
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <p>
                        ©Copyright Bammytoye 2024. All right reserved.
                    </p>

                    <p>
                        Terms of Service | Privacy Policy 
                    </p>

                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default home