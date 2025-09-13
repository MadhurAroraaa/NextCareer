"use client"
import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCard from './ReviewCard';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 1,
        slidesToSlide: 1  // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1324, min: 764 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
const ReviewData = [
    {
        id: 1,
        image: "/Images/u1.png",
        name: "Shiva",
        post: "Innocent Man",
        reviewshort: "Sexyyyyyy",
        description: "Everything Will Be Best",

    },

    {
        id: 2,
        image: "/Images/u2.png",
        name: "Ram",
        post: "Disciplined Man",
        reviewshort: "Aati Sundar",
        description: "Just Wait And Do Your Word",

    },
    {
        id: 3,
        image: "/Images/u3.png",
        name: "Hanuman",
        post: "Powerful Man",
        reviewshort: "Proud Of You",
        description: "I Am Always With You",

    },

]
const Review = () => {
    return (
        <div className='pb-16 pt-16'>
            <SectionHeading heading='Testimonials From Customers' subHeading='Dekhlia Bhai Ab Tujhe Logo Ke Review Chia, Bhai Pe Trust Nahi Hai' />
            <div className='w-[80%] mx-auto mt-16'>
                <Carousel
                    showDots={false}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2500}
                >
                    {ReviewData.map((data) => {
                        return <ReviewCard key={data.id} data={data} />
                    })}
                </Carousel>

            </div>
        </div>

    )
}

export default Review
