import React from 'react'

const Content = () => {
    return (
        <div className='pb-28'>
            <div className='flex flex-col items-center gap-4'>
                <p className='text-4xl text-center font-semibold mt-10'>Please verify your email...</p>
                <div className='relative'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32 text-gray-300">
                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 p-1 rounded-full absolute top-0 right-0 bg-white text-[#EA4B8A]">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                    </svg>
                </div>

                <p className='text-gray-500 font-medium text-xl text-center'>Please verify your email address we've sent confirmation email to: </p>
                <p className='text-xl font-bold'>demo@gmail.com</p>
                <p className='text-gray-500 font-medium text-xl text-center'>Click the confirmation link to begin using using dribble </p>
                <p className='text-gray-500 font-medium text-xl text-center md:w-[50%]'>Didn't receive the email? Check your spam folder, it may have been caught by a filter. If u still don't see it, you can <span className='text-[#EA4B8A] hover:underline hover:cursor-pointer'>resend the confirmation email</span></p>
                <p className='text-gray-500 font-medium text-xl text-center'>Wrong email address? <span className='text-[#EA4B8A] hover:underline hover:cursor-pointer'>Change it</span></p>

            </div>
        </div>
    )
}

export default Content