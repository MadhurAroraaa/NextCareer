import React from 'react'

const Footer = () => {
    return (
        <div className="bg-gradient-to-br from-blue-950/05 via-blue-950/15 to-blue-950/05 border-t-1 border-slate-900">
            <div className=" bg-gradient-to-tr from-blue-950/05 via-blue-950/15 to-blue-950/05">
                <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 items-start  '>
                    <div className='xl:col-span-2 mt-10 mb-6  '>
                        <div className='flex items-center space-x-2'>
                            <div className='flex items-center justify-center flex-col '>
                                <img
                                    src="/Images/logo.png"
                                    alt="Logo"
                                    className="w-30 sm:w-10 md:w-60 h-auto"
                                />
                            </div>
                        </div>
                        <p className='mt-4 text-sm text-gray-400'> NextCareer helps students and professionals discover jobs,internships, and resources to grow their careers..</p>
                        <div className='mt-5'>
                            <h1 className='text-sm lg:text-base text-gray-300 font-medium'>Call Us:</h1>
                            <p className='mt-1 text-gray-300 font-bold text-sm lg:text-base'>7419190554</p>
                        </div>
                        <div className='mt-5 text-gray-400 font-semibold text-xs lg:text-sm'>
                            <p>Jagadhri</p>
                            <p>Yamuna Nagar, Haryana, India</p>
                        </div>
                        <p className='mt-2 text-gray-400 font-medium text-xs lg:text-sm'>aroramadhur0248@gmail.com</p>
                    </div>
                    <div className='space-y-6 mt-10 mb-6 '>
                        <h1 className='text-lg font-bold text-gray-200'>For Candidates</h1>
                        <p className="footer_link">Browse Jobs</p>
                        <p className="footer_link">Browse Categories</p>
                        <p className="footer_link">Candidate Dashboard</p>
                        <p className="footer_link"> Job Alerts</p>
                        <p className="footer_link">My Bookmarks</p>
                    </div>
                    <div className='space-y-6 mt-10 mb-6 '>
                        <h1 className='text-lg font-bold text-gray-200'>For Employers</h1>
                        <p className="footer_link">Browse Candidates</p>
                        <p className="footer_link">Employer Dashboard</p>
                        <p className="footer_link">Add Job</p>
                        <p className="footer_link"> Job Packages</p>
                    </div>
                    <div className='space-y-6 mt-10 mb-6 '>
                        <h1 className='text-lg font-bold text-gray-200'>About Us</h1>
                        <p className="footer_link">Job Page</p>
                        <p className="footer_link">Job Page Alternative</p>
                        <p className="footer_link">Resume Page</p>
                        <p className="footer_link">Blog</p>
                        <p className="footer_link">Contact</p>
                    </div>
                    <div className='space-y-6 mt-10 mb-6 '>
                        <h1 className='text-lg font-bold text-gray-200'>Helpful Resourses</h1>
                        <p className="footer_link">Site Map</p>
                        <p className="footer_link">Terms Of Use</p>
                        <p className="footer_link">Privacy Center</p>
                        <p className="footer_link">Service Center</p>
                        <p className="footer_link">Accessibility Center</p>
                    </div>
                </div>
                <div className='pt-6 mt-10 mb-6 border-t w-[90%] border-gray-800'>
                    <p className='text-gray-500 text-center'>© 2025 MadhurArora. All Right Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
