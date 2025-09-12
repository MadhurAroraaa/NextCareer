import React from 'react'
import { BiCheck } from 'react-icons/bi';
type Props = {
data: {
    id: number;
    type: string;
    price: string;
    point1: string;
    point2: string;
    point3: string;
    point4: string;
}
};

const PriceCard = ({ data }: Props) => {
    return (
        <div className="p-1 rounded-xl bg-gradient-to-br from-blue-950/45 via-blue-800/45  to-blue-950/45 relative">
            
            <div className="bg-black/50 rounded-lg p-6 text-white flex flex-col justify-center items-center ">
                {data.type === 'Standard' && <div className='absolute top-7 right-7 px-4 md:px-6 py-1.5 bg-green-500/50 rounded-full text-xs'>
                    Recommended
                </div> }
                <h2 className="text-xl font-bold mb-2 mt-9  md:mt-6 text-blue-100">{data.type}</h2>
                <div className='mt-3 text-blue-50 text-lg '>
                    <span className='text-3xl font-bold text-blue-50'>₹{data.price}</span>
                    /Monthly
                </div>
                <div className='mt-12'>
                    <div className='flex items-center space-x-1 mb-6'>
                        <BiCheck className='w-7 h-7 text-blue-500'/>
                        <span className='text-gray-300'>
                            {data.point1}
                        </span>
                    </div>
                    <div className='flex items-center space-x-1 mb-6'>
                        <BiCheck className='w-7 h-7 text-blue-500'/>
                        <span className='text-gray-300'>
                            {data.point2}
                        </span>
                    </div>
                    <div className='flex items-center space-x-1 mb-6'>
                        <BiCheck className='w-7 h-7 text-blue-500'/>
                        <span className='text-gray-300'>
                            {data.point3}
                        </span>
                    </div>
                    <div className='flex items-center space-x-1 mb-6'>
                        <BiCheck className='w-7 h-7 text-blue-500'/>
                        <span className='text-gray-300'>
                            {data.point4}
                        </span>
                    </div>
                </div>
                <div className='mt-8 w-full text-center'>
                    <button className='bg-sky-50 text-black  py-2 rounded-full text-lg font-bold hover:bg-blue-950 hover:text-gray-50 transition-all duration-300 hover:scale-105 active:scale-95 active:opacity-55 w-full cursor-pointer'>View Profile</button>
                </div>
                
            </div>
        </div>
    )
}

export default PriceCard
