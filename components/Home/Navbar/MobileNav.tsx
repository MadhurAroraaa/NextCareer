"use client"
import React from 'react'
import Link from 'next/link'
import { NavLinks } from '@/constant/constant'
import TextRoll from '@/components/Helper/TextRoll'
import { CgClose } from 'react-icons/cg'
import { Epilogue } from "next/font/google";

type Props ={
    showNav:boolean;
    closeNav: () => void;
};

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "700"], // choose weights
});



const MobileNav = ({closeNav,showNav}:Props) => {
    const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]"
    return (

            <div className={` ${navOpen} fixed inset-0 transform transition-all right-0 duration-500 z-[100001] bg-black/80 w-full h-screen backdrop-blur`} >
                <div className={` ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-gray-600/20 space-y-6 z-[1000050] right-0`} >

                    {NavLinks.map((link) => {
                        return <Link key={link.id} href={link.url} >
                            <TextRoll
                                text={link.label}
                                className= {`w-fit ml-12 text-4xl sm:text-[30px] text-white ${epilogue.className} font-black`}  
                                hoverEffect
                                animateIn
                            />

                        </Link>
                    })}
                    <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6'/>
                </div>

            </div>

    )
}

export default MobileNav
