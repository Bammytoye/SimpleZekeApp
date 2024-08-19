import React from 'react'
import Image from 'next/image'

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
                <div className="flex justify-between items-center space-x-10 px-10 py-12 border shadow-lg rounded-tr-[100px] rounded-bl-[100px]">
                    <div className='flex flex-col justify-center items-center space-y-1 text-center border-r-2 border-gray-600 px-12'>
                        <Image src="/image/tech.png" alt='Sign Up' width='50' height='50'/>
                        <h3 className='font-bold text-gray-600'>
                            Sign Up
                        </h3>
                        
                        <p className='text-sm text-gray-900'>
                            Create a profile and confirm your identity. Its that simple to begin your crypto journey. Lets go!! 
                        </p>
                    </div>

                    <div className='flex flex-col justify-center items-center space-y-1 text-center border-r-2 border-gray-600 px-12'>
                        <Image src="/image/tech.png" alt='Sign Up' width='50' height='50'/>
                        <h3 className='font-bold text-gray-600'>
                            Save Funds
                        </h3>
                        
                        <p className='text-sm text-gray-900'>
                            Create a profile and confirm your identity. Its that simple to begin your crypto journey. Lets go!! 
                        </p>
                    </div>

                    <div className='flex flex-col justify-center items-center space-y-1 text-center px-10'>
                        <Image src="/image/tech.png" alt='Sign Up' width='50' height='50'/>
                        <h3 className='font-bold text-gray-600'>
                            Make Payment
                        </h3>
                        
                        <p className='text-sm text-gray-900'>
                            Create a profile and confirm your identity. Its that simple to begin your crypto journey. Lets go!! 
                        </p>
                    </div>
                </div>
            </div>

            {/* third component */}
            <div>
                <div className='flex justify-between items-center px-44 py-7'>
                    <div>
                        <Image src="/image/thrid.png" alt="phone" width="300" height="300"/>
                    </div>

                    <div className='flex flex-col items-start space-y-10'>
                        <h3>
                            Let your money do your work
                        </h3>

                        <p>
                            Trust Bundle leveraged tokens to save the day even when there is a market dip
                        </p>

                        <a href="#">
                            Beat the dip
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default home