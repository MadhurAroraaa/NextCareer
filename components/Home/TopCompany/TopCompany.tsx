"use client"
import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TopCompanyCard from './TopCompanyCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4 ,
    slidesToSlide: 1  // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const CompanyData = [
    {
        id:1,
        image:"/Images/c1.png",
        name:"Udemy",
        location:"Delhi, India",
        position:20,
    },

        {
        id:2,
        image:"/Images/c2.png",
        name:"Stripe",
        location:"Jagadhri, India",
        position:30,
    },
        {
        id:3,
        image:"/Images/c3.png",
        name:"DropBox",
        location:"Faridabad, India",
        position:33,
    },
        {
        id:4,
        image:"/Images/c4.png",
        name:"Figma",
        location:"Ludhiana, India",
        position:40,
    },


]

const TopCompany = () => {
    return (
        <div className='pt-16 pb-16'>
            <SectionHeading heading='Top Company Registered' subHeading='Some Of The Companies We Have Helped Recruit Excellent Applicants Over The Years.'/>
            <div className='w-[80%] mx-auto mt-16'>
                <Carousel

  showDots={false}
  responsive={responsive}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={2500}
>
 {CompanyData.map((data)=>{
    return <TopCompanyCard key={data.id} data={data}/>
 })}
</Carousel>

            </div>
        </div>
    )
}

export default TopCompany
