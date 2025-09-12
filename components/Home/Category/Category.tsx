import SectionHeading from '@/components/Helper/SectionHeading'
import { div } from 'framer-motion/client'
import React from 'react'
import { FaLaptopCode } from 'react-icons/fa'
import { GiTakeMyMoney } from 'react-icons/gi'
import { IoMegaphoneOutline } from 'react-icons/io5'
import { LiaCarSideSolid } from 'react-icons/lia'
import { LuRocket } from 'react-icons/lu'
import { MdOutlineMedicalServices } from 'react-icons/md'
import { PiPaintBrushBroadDuotone } from 'react-icons/pi'
import { RiCustomerService2Fill } from 'react-icons/ri'
import CategoryCard from './CategoryCard'

const CategoryData = [
    {
        id: 1,
        categoryName: "Accounting / Finance",
        openPositions: 2,
        icon: <GiTakeMyMoney className='w-10 h-10 text white' />
    },
    {
        id: 2,
        categoryName: "Marketing",
        openPositions: 86,
        icon: <IoMegaphoneOutline className='w-10 h-10 text white' />
    },
    {
        id: 3,
        categoryName: "Design",
        openPositions: 43,
        icon: <PiPaintBrushBroadDuotone className='w-10 h-10 text white' />
    },
    {
        id: 4,
        categoryName: "Development",
        openPositions: 14,
        icon: <FaLaptopCode className='w-10 h-10 text white' />
    },
    {
        id: 5,
        categoryName: "Project Management",
        openPositions: 2,
        icon: <LuRocket className='w-10 h-10 text white' />
    },
    {
        id: 6,
        categoryName: "Customer Service",
        openPositions: 2,
        icon: <RiCustomerService2Fill className='w-10 h-10 text white' />
    }, {
        id: 7,
        categoryName: "Health & Care",
        openPositions: 25,
        icon: <MdOutlineMedicalServices className='w-10 h-10 text white' />
    },
    {
        id: 8,
        categoryName: "Automotive Jobs",
        openPositions: 92,
        icon: <LiaCarSideSolid className='w-10 h-10 text white' />
    }
]

const Category = () => {
    return (
        <div className='pt-16 pb-16'>
            <SectionHeading heading="Popular Job Categories" subHeading="2020 Jobs Live - 293 Added Today." />
            <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {CategoryData.map((category)=>{
                    return <div key={category.id}>
                        <CategoryCard category={category }/>

                    </div>
                })}

            </div>
        </div>
    )
}

export default Category
