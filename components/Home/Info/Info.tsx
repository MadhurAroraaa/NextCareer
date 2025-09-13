import Image from 'next/image'
import React from 'react'
import { Epilogue } from "next/font/google";

import { BiCheck } from 'react-icons/bi'

const epilogue = Epilogue({
    subsets: ["latin"],
    weight: ["400", "700"], // choose weights
});


const Info = () => {
    return (
        <div className='pt-16 pb-16'>
            <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center '>
                <div>
                    <Image src="/Images/about.png"
                        alt="Image"
                        width={1000}
                        height={1000}
                        className="w-[1000px] h-[1000px] object-contain" />
                </div>

                {/* TEXT CONTENT */}
                <div>
                    <h1 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold leading-8 lg:leading-16 uppercase bg-gradient-to-r from-sky-500 via-25% to-blue-800 bg-clip-text text-transparent ${epilogue.className}`}>Get applications from the world best talents.</h1>
                    <p className='mt-6 text-gray-300'>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide.</p>
                    <div className='mt-8'>
                        <div className='flex items-center space-x-2 mb-4'>
                            <BiCheck className='w-7 h-7 text-sky-500' />
                            <span className='text-gray-300 font-medium'>Bring to the table win-win survival</span>
                        </div>
                        <div className='flex items-center space-x-2 mb-4'>
                            <BiCheck className='w-7 h-7 text-sky-500' />
                            <span className='text-gray-300 font-medium'>Capitalize on low hanging fruit to identify</span>
                        </div>
                        <div className='flex items-center space-x-2 mb-4'>
                            <BiCheck className='w-7 h-7 text-sky-500' />
                            <span className='text-gray-300 font-medium'>But I must explain to you how all this</span>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <button className='bg-gradient-to-r from-sky-500 to-blue-600 hover:scale-105 transition-transform duration-300 shadow-md shadow-sky-500/40 text-white px-10 py-3 rounded-lg text-center cursor-pointer active:scale-95 text-base font-bold hover:opacity-55'>Post a Job</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
