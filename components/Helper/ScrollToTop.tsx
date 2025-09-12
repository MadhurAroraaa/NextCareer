"use client"
import React,{useEffect, useState} from 'react'
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [isvisible,setIsVisible]=useState(false);
    useEffect(()=>{
        const toggleVisibility = () => {
            if(window.scrollY > 300){
                setIsVisible(true)
            }
            else{
                setIsVisible(false)
            }
        }
        window.addEventListener("scroll",toggleVisibility)
        return () => window.removeEventListener("scroll",toggleVisibility)
    },[])
    const scrollToTop=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth",
        });
    }
    return (
        <div className=' fixed bottom-4 animate-pulse right-4'>
            {isvisible && (
                <button className='bg-gradient-to-r from-sky-500 to-blue-600 hover:scale-105 transition-transform duration-300 shadow-md shadow-sky-500/40 text-white rounded-full h-12 w-12 flex items-center justify-center focus:outline-none' onClick={scrollToTop}>
                    <FaArrowUp/>
                </button>
            )}

        </div>
    )
}

export default ScrollToTop
