import Image from 'next/image';
import React from 'react'
type Props = {
    
        data: {
    id: number;
    image: string;
    name: string;
    post: string;
    reviewshort: string;
    description: string;

    }
}

const ReviewCard = ({ data }: Props) => {
    return (
        <div className='w-full lg:w-[60%] mx-auto flex justify-center items-center flex-col'>
            <Image src={data.image} alt={data.name} width={80} height={80} className='object-cover'/>
            <h1 className='mt-4 text-lg font-bold text-sky-600 text-center'>{data.reviewshort}</h1>
            <p className='text-gray-400 mt-4 text-center'>laudantium corrupti, sequi architecto laboriosam amet ipsa laborum similique, non dolorem delectus?{data.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum deserunt velit hic molestiae nulla ipsam reiciendis, porro iure </p>
            <div className='mt-8 text-center'>
                <h1 className='text-xl text-gray-200 font-semibold'>{data.name}</h1>
                <p className='text-sm mt-2'>{data.post}</p>
            </div>
        </div>
    )
}

export default ReviewCard
