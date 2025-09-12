"use client";
import { NavLinks } from '@/constant/constant'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
    openNav: () => void
}

const Navbar = ({openNav}:Props) => {

    const [navBg, setNavBg] = useState(false);

    const changeColor = () => {
        if(window.scrollY >= 50){
            setNavBg(true);
        }else{
            setNavBg(false);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', changeColor);
        return () => {
            window.removeEventListener('scroll', changeColor);
        }
    }, [])

    return (
        <div className={`${navBg ? 'nav-bg' : ''} transition-all duration-200 h-[12vh] z-[10000] fixed w-full`}>
            <div className='flex items-center h-full justify-between w-[92%] mx-auto'>
                <div className='flex items-center sm:space-x-20'>
                    {/* LOGO */}
                    <div className='flex items-center space-x-2'>
                        <div className='flex items-center justify-center flex-col'>
                            <img
                                src="/Images/logo.png"
                                alt="Logo"
                                className="w-30 sm:w-10 md:w-60 h-auto"
                            />
                        </div>
                    </div>
                    {/* NAVLINKS */}
                    <div className='hidden lg:flex item-center space-x-10'>
                        {NavLinks.map((link) => {
                            return <Link key={link.id} href={link.url} className='text-2xl hover:text-[#00AEEF] font-bold transition-all duration-200'>
                                <p>{link.label}</p>
                            </Link>
                        })}
                    </div>
                </div>
                {/* BUTTONS */}
                <div className='flex items-center space-x-4 '>
                    <button className='px-6 py-2.5 text-base md:text-lg rounded-lg cursor-pointer bg-gray-800  transition-all duration-3 00  hover:opacity-65 font-medium hover:shadow-sm shadow-[#00AEEF]'>Login / Register</button>
                    <button className='px-6 py-2.5 text-base sm:text-sm md:text-lg rounded-lg cursor-pointer bg-[#00AEEF] transition-all duration-300  hover:opacity-65 hidden sm:block font-medium hover:shadow-sm shadow-gray-200'>Jobs Post</button>
                    <HiBars3BottomRight className='w-10 h-10 cursor-pointer text-white lg:hidden ' onClick={openNav}/>


                </div>
            </div>
        </div>
    )
}

export default Navbar
