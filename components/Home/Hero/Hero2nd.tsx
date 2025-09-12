import React from 'react'
import { Epilogue } from "next/font/google";
import JobSearchBar from './JobSearchBar';
import Image from 'next/image';

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "700"], // choose weights
});

const Hero2nd = () => {
  return (
    <div className="relative w-full flex h-screen justify-center flex-col bg-gradient-to-b from-black via-gray-900 to-black">
      <div className='w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10'>
        {/* TEXT CONTENT */}
        <div className="space-y-6">
          <h1 className={`text-3xl md:text-6xl font-black uppercase bg-gradient-to-r from-sky-500 via-25% to-blue-800 bg-clip-text text-transparent ${epilogue.className}`}>
            Join us & Explore <br /> Thousands of Jobs
          </h1>

          <p className='mt-4 text-sm md:text-2xl font-bold'>Find Jobs, Employment & Career Opportunities</p>
          <JobSearchBar />
          <div className='md:text-lg md:font-bold text-base font-semibold text-gray-300 mt-6 flex items-center space-x-6'>
            <span>Popular Searches : </span>
            <span className='md:text-base md:font-semibold text-sm font-light'>Designer , Developer , Web , IOS , PHP , Senior , Engineer</span>

          </div>
        </div>
        {/* IMAGE CONTENT */}
        <div className='mx-auto hidden md:block' >
          <Image
            src="/Images/maddy.png"
            alt="Hero Image"
            width={600}
            height={600}
            className="w-[600px] h-[600px] object-contain"
          />

        </div>

      </div>

    </div>
  )
}

export default Hero2nd
