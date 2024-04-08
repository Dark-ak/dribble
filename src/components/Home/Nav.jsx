import React, { useState } from 'react'
import logo from "../../assets/dribbble.svg"

const Nav = () => {

    const [drawer, setDrawer] = useState(false)

    return (
        <div className='p-3 md:px-6 border-b'>
            <div className='flex items-center justify-between'>
                <div className='flex gap-2 md:gap-14'>
                    {drawer ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 md:hidden" onClick={() => setDrawer(!drawer)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 md:hidden" onClick={() => setDrawer(!drawer)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                        </svg>}
                    <img src={logo} alt="" className='w-24' />

                    <div className='md:flex gap-10 hidden'>
                        <p className='font-medium text-gray-500 cursor-pointer hover:text-[#EA4B8A]'>Inspirtaion</p>
                        <p className='font-medium text-gray-500 cursor-pointer hover:text-[#EA4B8A]'>Find Work</p>
                        <p className='font-medium text-gray-500 cursor-pointer hover:text-[#EA4B8A]'>Learn Design</p>
                        <p className='font-medium text-gray-500 cursor-pointer hover:text-[#EA4B8A]'>Go Pro</p>
                        <p className='font-medium text-gray-500 cursor-pointer hover:text-[#EA4B8A]'>Hire Designer</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='text-gray-500 bg-gray-100 md:flex hidden  items-center gap-1 px-3 py-2 rounded-xl w-40'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                        </svg>
                        <input type="text" placeholder='Search..' className='bg-gray-100 focus:outline-none w-full' />
                    </div>
                    <div className='text-gray-400 md:relative '>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                            <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 p-[2px] rounded-full bg-white absolute text-gray-600 -bottom-3 -right-2 ">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                        </svg>

                    </div>
                    <button className='text-white bg-[#EA4B8A] px-5 py-2 rounded-xl font-medium'>Upload</button>
                </div>
            </div>
            <div className={`absolute flex flex-col z-30 ${drawer ? "left-0 inset-0 opacity-100" : "-left-32 opacity-10"} md:hidden transition-all duration-700 ease-in-out top-16  bg-black bg-opacity-25`}>
                <div className='flex flex-col gap-4 py-5 px-4 bg-white'>
                    <p className='text-lg'>Inspiration</p>
                    <p className='text-lg'>Find Work</p>
                    <p className='text-lg'>Learn Design</p>
                    <p className='text-lg'>Go Pro</p>
                    <p className='text-lg'>Hire Designers</p>
                </div>
            </div>
        </div>
    )
}

export default Nav