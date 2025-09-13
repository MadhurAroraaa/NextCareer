import SectionHeading from "@/components/Helper/SectionHeading";
import { div } from "framer-motion/client";
import { title } from "process";
import React from "react";
import JobCard from "./JobCard";

const jobs = [
    {
        id: 1,
        image: "/Images/j1.png",
        title: "Software Engineer",
        location: "Mumbai, India",
        jobType: "Full Time",
        urgency: "Urgent",
    },
    {
        id: 2,
        image: "/Images/j2.png",
        title: "Recruting Coordinator",
        location: "Gurgram, India",
        jobType: "Part Time",
        urgency: "Urgent",
    },
    {
        id: 3,
        image: "/Images/j3.png",
        title: "Product Manager, Studio",
        location: "Banglore, India",
        jobType: "Contract",
        urgency: "Urgent",
    },
    {
        id: 4,
        image: "/Images/j4.png",
        title: "Senior Product Designer",
        location: "Delhi, India",
        jobType: "Full Time",
        urgency: "Urgent",
    },
    {
        id: 5,
        image: "/Images/j5.png",
        title: "Product Manager, Risk",
        location: "Pune, India",
        jobType: "Contract",
        urgency: "Private",
    },
    {
        id: 6,
        image: "/Images/j6.png",
        title: "Technical Architect",
        location: "Ludhiana, India",
        jobType: "Full Time",
        urgency: "Private",
    },
    {
        id: 7,
        image: "/Images/j7.png",
        title: "Web Developer",
        location: "Noida, India",
        jobType: "Full Time",
        urgency: "Urgent",
    },
    {
        id: 8,
        image: "/Images/j8.png",
        title: "Senior Product Designer",
        location: "Chandigarh, India",
        jobType: "Full Time",
        urgency: "Private",
    },
    {
        id: 9,
        image: "/Images/j9.png",
        title: "Senior BI Analyst",
        location: "Hyderabad, India",
        jobType: "Full Time",
        urgency: "Private",
    },
];

const Job = () => {
    return (
        <div className="pt-16 pb-16">
            <SectionHeading
                heading="Featured Jobs"
                subHeading="Know Your Worth And Find The Job That Qualify Your Life"
            />
            <div className="w-[95%] sm:w-[80%] mt-16 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 items-center">
                {jobs.map((job) => {
                    return (
                        <div key={job.id}>
                            <JobCard job={job} />
                        </div>
                    );
                })}
            </div>
            <div className="mt-10 text-center">
                <button
                    className="bg-gradient-to-r from-sky-500 to-blue-600 
  hover:scale-105 active:scale-95 
  transition-transform duration-300 ease-in-out 
  shadow-md hover:shadow-lg shadow-sky-500/40 
  text-white px-10 sm:py-4 py-2 cursor-pointer 
  text-base md:text-xl font-medium rounded-lg"
                >
                    Load More Listings
                </button>
            </div>
        </div>
    );
};

export default Job;
