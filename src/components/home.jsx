import React from 'react'
import Image from 'next/image'

const home = () => {
    return (
        <div>
            {/* first component */}
            <div className="pt-32 px-32 cursor-pointer h-[580px] shadow-xl bg-gradient-to-r from-blue-200 via-purple-700 to-pink-800 shadow-gray-300">
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

                    <div>
                        <Image src="/image/Cashout 1.png" alt='HomePix' width='300' height='300'/>
                    </div>
                </div>
            </div>

            {/* second component */}
            <div>
                <div>
                    <div>
                        <Image src="/image/tech.png" alt='Sign Up' width='300' height='300'/>
                        <h3>
                            Sign Up
                        </h3>
                        
                        <p>
                            Create a profile and confirm your identity. Its that simple to begin your crypto journey. Lets go!! 
                        </p>
                    </div>

                    <div>
                        <Image src="/image/tech.png" alt='Sign Up' width='300' height='300'/>
                        <h3>
                            Save Funds
                        </h3>
                        
                        <p>
                            Create a profile and confirm your identity. Its that simple to begin your crypto journey. Lets go!! 
                        </p>
                    </div>

                    <div>
                        <Image src="/image/tech.png" alt='Sign Up' width='300' height='300'/>
                        <h3>
                            Make Payment
                        </h3>
                        
                        <p>
                            Create a profile and confirm your identity. Its that simple to begin your crypto journey. Lets go!! 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default home