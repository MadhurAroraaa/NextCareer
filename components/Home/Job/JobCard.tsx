import React from 'react'
import { BiBriefcase } from 'react-icons/bi';
import { BsBookmark } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';

type Props={
    job: {
    id: number;
    image: string;
    title: string;
    location: string;
    jobType: string;
    urgency: string;
}
}

const JobCard = ({job}:Props) => {
    return (
        <div className='border-[1.5px] border-gray-700 p-6 rounded-lg relative hover:scale-105 bg-gradient-to-tl from-blue-950 via-black to-blue-950'>
            <div className='w-7 h-7 cursor-pointer hover:bg-gray-800 flex items-center transition-all duration-200 justify-center flex-col absolute top-4  right-4 hover:scale-110 '>
                <BsBookmark className='w-3 h-3'/>
            </div>
            <div className='flex items-center space-x-4'>
                <img src={job.image} alt={job.title} width={50} height={50} className='hover:scale-105 transition-all duration-200'/>
                <div>
                    <h1 className='text-base font-medium hover:scale-105 transition-all duration-200'>{job.title}</h1>
                    <div className='flex items-center space-x-6'>
                        <div className='flex items-center space-x-1 mt-2 text-gray-500'>
                            <BiBriefcase className='w-5 h-5'/>
                            <p className='text-gray-500 text-sm'>Segment</p>
                        </div>
                        <div className='flex items-center space-x-1 mt-2 text-gray-500'>
                            <GrLocation className='w-5 h-5'/>
                            <p className='text-gray-500 text-sm'>{job.location}</p>
                        </div> 
                    </div>
                </div>
            </div>
            <div className='flex items-center space-x-4 mt-3'>
                <div className='px-4 py-1 bg-blue-950/30 rounded-full text-xs text-blue-300'>
                {job.jobType}
                </div>
                <div className={`px-4 py-1 rounded-full text-xs ${job.urgency=== 'Urgent' ? "bg-red-300/30 text-red-300" : "bg-green-600/30 text-green-300 "} `}>
                {job.urgency}
                </div>
            </div>
        </div>
    )
}

export default JobCard
