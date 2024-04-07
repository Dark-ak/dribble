import React, { useState } from 'react'
import logo from "../assets/logo_pink.png"
import Aim from './Signup/Aim'


const Create = () => {

  const [image, setImage] = useState()
  const [location, setLocation] = useState()
  const [step, setStep] = useState(1)
  const defImage = "https://robohash.org/LDN.png?set=set1&size=150x150"

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const render = () => {
    switch (step) {
      case 1:
        return (
          <div className='flex flex-col items-center my-10'>
            <div className='flex flex-col gap-5'>
              <p className='font-bold text-4xl'>Welcome! Let's create your profile</p>
              <p className='text-gray-500 text-left'>Let's others get to know you better! You can do these late</p>
              <div className=' flex flex-col my-6 gap-5'>
                <p className='font-bold text-xl'>Add an Avatar</p>
                <div className='flex flex-col md:flex-row items-start gap-10'>
                  <div className='border-dashed border-4 rounded-full w-44 h-44 flex justify-center items-center'>
                    {image ? <img src={image} alt="" className='rounded-full  w-44 h-44 p-1' /> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                    </svg>
                    }
                  </div>
                  <div className='flex flex-col gap-5 my-5'>
                    <label htmlFor='image' className='text-black  border-2 px-3 py-2 rounded-xl'>
                      <input type="file" name="image" onChange={handleImageChange} id="image" accept='image/*' className='hidden' />
                      Choose Image
                    </label>
                    <div className='flex gap-1 items-center hover:cursor-pointer' onClick={() => setImage(defImage)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                      <p className='text-gray-500'>Or choose one of our defaults</p>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col gap-5 items-start my-10'>
                  <p className='font-bold text-xl'>Add your Location</p>
                  <input type="text" name="location" id="" onChange={(e) => setLocation(e.target.value)} className='border-b focus:outline-none p-2 w-full' placeholder='Enter Your Location' />
                  <button disabled={(!location || !image) && true} className='disabled:bg-pink-300 bg-[#EA4B8A] text-white text-xl px-24 py-2 rounded my-5' onClick={handleNext}>Next</button>
                </div>
              </div>
            </div>

          </div>
        )

      case 2:
        return (
          <Aim back={handleBack}/>
        )

        default:
          return null
    }
  }


  return (
    <div className=' px-10 py-10'>
      <img src={logo} alt="" className='w-32' />
      {render()}
    </div>
  )
}

export default Create