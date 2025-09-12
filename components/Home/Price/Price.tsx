import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import PriceCard from './PriceCard'

const PriceData = [
    {
        id:1,
        type: "Basic",
        price: "199",
        point1: "1 Job Listing",
        point2: "0 Featured Jobs",
        point3: "Job Listed For 7 Days",
        point4: "Leave Message If I Want I Will Call You"
    },
    {
        id:2,
        type: "Standard",
        price: "399",
        point1: "3 Job Listing",
        point2: "1 Featured Jobs",
        point3: "Job Listed For 15 Days",
        point4: "Customer Support 11/5 "
    },
    {
        id:3,
        type: "Premium",
        price: "99999999+",
        point1: "All Employees Are Yours",
        point2: "No Need To Hire",
        point3: "Job Listed For Lifetime",
        point4: "One Person Will Live With You"
    },

]


const Price = () => {
    return (
        <div className='pt-16 pb-16'>
            <SectionHeading heading='Pricing Packages' subHeading='Chup Chap Kharid' />
            <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
                {PriceData.map((data) => {
                    return <PriceCard key={data.id} data={data} />
                })}
            </div>
        </div>
    )
}

export default Price
