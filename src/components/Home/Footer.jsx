import React from 'react'
import logo from "../../assets/dribbble.svg"
import pinkBall from "../../assets/pinkBall.png"
import ball from "../../assets/ball.png"
import fb from "../../assets/fb.png"
import insta from "../../assets/instagram.png"
import pin from "../../assets/pin.png"
import twitter from "../../assets/twitter.png"

const Footer = () => {
  return (
    <div>
      <footer className='bg-[#FAFAFA] grid  gap-10 justify-center sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 py-16 px-10'>
        <div className='flex flex-col gap-3'>
          <img src={logo} alt="" className='w-24' />
          <p className='text-gray-500 text-sm font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor mi lobortis.</p>
          <div className="flex gap-3">
            <img src={ball} alt="" className='w-5'/>
            <img src={twitter} alt="" className='w-5' />
            <img src={fb} alt="" className='w-5' />
            <img src={insta} alt="" className='w-5' />  
            <img src={pin} alt="" className='w-5' />

          </div>
        </div>

        <div>
          <p className='font-medium mb-2'>For Designes</p>
          <div className='flex flex-col gap-4'>
            <p className='text-gray-500 font-medium'>Purus</p>
            <p className='text-gray-500 font-medium'>Explore Desgin Work</p>
            <p className='text-gray-500 font-medium'>Design Blog</p>
            <p className='text-gray-500 font-medium'>Overtime Special</p>
            <p className='text-gray-500 font-medium'>PLayoffs</p>
            <p className='text-gray-500 font-medium'>Serenity</p>
            <p className='text-gray-500 font-medium'>Ethereal</p>
            <p className='text-gray-500 font-medium'>Whisper</p>
          </div>
        </div>
        <div>
          <div className='mb-8'>
            <p className='font-medium mb-2'>Hire Designes</p>
            <div className='flex flex-col gap-4'>
              <p className='text-gray-500 font-medium'>Purus</p>
              <p className='text-gray-500 font-medium'>Explore Desgin Work</p>
              <p className='text-gray-500 font-medium'>Ethereal</p>
              <p className='text-gray-500 font-medium'>Whisper</p>
            </div>
          </div>

          <div>
            <p className='font-medium mb-2'>Brands</p>
            <div className='flex flex-col gap-1'>
              <p className='text-gray-500 font-medium'>Advertise with us</p>
            </div>
          </div>
        </div>
        <div>
          <p className='font-medium mb-2'>Company</p>
          <div className='flex flex-col gap-4'>
            <p className='text-gray-500 font-medium'>Innovative</p>
            <p className='text-gray-500 font-medium'>Creative</p>
            <p className='text-gray-500 font-medium'>Inspiration</p>
            <p className='text-gray-500 font-medium'>Visionary</p>
            <p className='text-gray-500 font-medium'>Artistry</p>
            <p className='text-gray-500 font-medium'>Imaginative</p>
            <p className='text-gray-500 font-medium'>Design-centric</p>
            <p className='text-gray-500 font-medium'>Craftsmanship</p>
            <p className='text-gray-500 font-medium'>Inventive</p>
          </div>
        </div>

        <div>
          <div className='mb-8'>
            <p className='font-medium mb-2'>Directories</p>
            <div className='flex flex-col gap-4'>
              <p className='text-gray-500 font-medium'>Business</p>
              <p className='text-gray-500 font-medium'>Technology</p>
              <p className='text-gray-500 font-medium'>Design</p>
              <p className='text-gray-500 font-medium'>Marketing</p>
              <p className='text-gray-500 font-medium'>Finance</p>
            </div>
          </div>
          <div>
            <p className='font-medium mb-2'>Design Assets</p>
            <div className='flex flex-col gap-4'>
              <p className='text-gray-500 font-medium'>Fonts</p>
              <p className='text-gray-500 font-medium'>Icons</p>
              <p className='text-gray-500 font-medium'>Illustrations</p>
              <p className='text-gray-500 font-medium'>Templates</p>
            </div>
          </div>


        </div>
        <div>
          <p className='font-medium mb-2'>Design Resources</p>
          <div className='flex flex-col gap-4'>
            <p className='text-gray-500 font-medium'>Fonts</p>
            <p className='text-gray-500 font-medium'>Icons</p>
            <p className='text-gray-500 font-medium'>Illustrations</p>
            <p className='text-gray-500 font-medium'>Templates</p>
            <p className='text-gray-500 font-medium'>Mockups</p>
            <p className='text-gray-500 font-medium'>Textures</p>
          </div>
        </div>
      </footer>
      <div className='py-5 border-t px-5 flex justify-between'>
        <p>&copy; 2024 Aakash. All rights Reserved</p>
        <div className='flex gap-2 items-center'>
          <p><span className='font-bold'>234987</span> shots dribbled</p>
          <img src={pinkBall} alt="" className='w-6' />
        </div>
      </div>
    </div>
  )
}

export default Footer