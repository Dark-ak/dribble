import React from 'react'
import Form from './Signup/Form'
import logo from "../assets/brownLogo.png"
import login from "../assets/login.jpg"


const Signup = () =>  {


  return (
    <div className=''>
      <div className='items-start justify-start lg:grid-cols-[1fr_1.5fr]  lg:grid'>
        <div className='bg-[#F2D184] h-screen lg:flex flex-col hidden'>
          <div className='pt-10 px-20'>
            <img src={logo} alt="" className='w-28' />
            <p className='font-bold text-3xl mt-10 w-[80%] text-[#856116]'>Discover the world's top Designers & Creatives</p>
          </div>
          <img src={login} alt="" className='bg-red-600 w-[1000px] h-[1000px] object-cover' />
        </div>
        <div className='px-6 py-4'>
          <p className='text-right text-lg mb-10 font-medium'>Already a member? <span className='text-blue-400 hover:underline cursor-pointer'>Sign in</span></p>
          <div className='md:mx-48'>
            <p className='text-3xl font-bold'>Sign up to Dribble</p>
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup