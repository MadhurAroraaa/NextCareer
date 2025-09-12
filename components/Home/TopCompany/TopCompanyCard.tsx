import React from 'react'
import { GrLocation } from 'react-icons/gr';
type Props = {
    data: {
        id: number;
        image: string;
        name: string;
        location: string;
        position: number;
    }
}

const TopCompanyCard = ({ data }: Props) => {
    return (
        <div className='border-[1.5px] border-gray-700 p-6 rounded-lg relative hover:scale-105 bg-gradient-to-b from-slate-900 via-gray-950 to-slate-900 m-3' >
            <img src={data.image} alt={data.name} width={80} height={80} className='object-cover mx-auto'/>
            <h1 className='ext-lg font-medium mt-4 text-center text-gray-200'>{data.name}</h1>
            <div className='text-sm text-gray-400 flex items-center-safe space-x-1 text-center justify-center mt-3'>
                <GrLocation/>
                <p>{data.location }</p>
            </div>
            <div className='px-10 py-3  cursor-pointer  transition-all duration-300 bg-sky-500 text-gray-200 rounded-lg mt-4 text-sm font-bold hover:text-gray-200 text-center hover:scale-105 hover:bg-blue-800'>
                {data.position}  Open Positions
            </div>
        </div>
        
    )
}

export default TopCompanyCard
