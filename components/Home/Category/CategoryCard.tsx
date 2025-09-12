
"use client"
import React from 'react'
import Tilt from 'react-parallax-tilt'

type Props = {
    category: {
    id: number;
    categoryName: string;
    openPositions: number;
    icon: React.JSX.Element;
};
};
const CategoryCard = ({category}:Props) => {
    return (
<Tilt scale={1.1} transitionSpeed={500}>
    <div className='p-6 bg-gradient-to-b from-slate-900 via-gray-950 to-slate-900 shadow-md'>
        <div className='w-16 h-16 bg-gradient-to-br from-slate-700 via-sky-600 to-slate-700  rounded-full mx-auto flex items-center justify-center flex-col shadow-sky-700 shadow-lg'>
            {category.icon}
        </div>
        <h1 className='mt-6 text-center font-medium text-gray-200'>{category.categoryName}</h1>
        <p className='mt-2 text-gray-400 text-sm text-center'>( {category.openPositions} Open Positions )</p>

    </div>

</Tilt>
    )
}

export default CategoryCard
 