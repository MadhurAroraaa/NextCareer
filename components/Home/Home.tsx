"use client"
import React, { useEffect } from 'react'
import MainHero from './Hero/MainHero'
import Category from './Category/Category'
import Job from './Job/Job'
import TopCompany from './TopCompany/TopCompany'
import Info from './Info/Info'
import Price from './Price/Price'
import Review from './Review/Review'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Home = () => {
    useEffect(() => {
        const initAOS = async () => {
            await import('aos');
            AOS.init({
                duration:1000,
                easing:'ease',
                once:true,
                mirror:false,
                anchorPlacement:"top-bottom",
                
            })
        }
        initAOS();
    }, [])
    
    return (
        <div className='overflow-hidden '>
            <MainHero />
            <Category />
            <Job />
            <TopCompany />
            <Info />
            <Price />
            <Review />

        </div>
    )
}

export default Home
