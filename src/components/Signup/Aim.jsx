import React, { useState } from 'react'
import first from "../../assets/first.png"
import sec from "../../assets/second.png"
import third from "../../assets/third.png"
import { useNavigate } from 'react-router-dom'



const Aim = ({back}) => {

    const [one, setOne] = useState(false)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)
    const navigate = useNavigate()

    return (
        <div >
            <div className='flex-col items-center flex'>
                <div className='bg-gray-200 absolute left-56 top-9 px-2 md:px-4 py-3 rounded-xl cursor-pointer' onClick={back}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </div>

                <div className='my-10'>
                    <p className='font-bold text-2xl md:text-4xl text-center'>What brings you to Dribble?</p>
                    <p className='text-lg text-center font-medium text-gray-500 mt-5'>Select the options that describe you. Don't worry, you can explore other options later.</p>
                </div>
                <div className=' flex flex-col md:flex-row mt-10 my-4 gap-8'>
                    <div className={`flex relative items-center gap-5 flex-col md:w-[400px] md:h-[325px] justify-center border-4  rounded-xl px-4 pt-8 py-6 ${one && "border-[#EA4B8A] pt-20"}`} onClick={() => setOne(!one)}>
                        <img src={first} alt="" className={`w-[250px] md:w-[300px]  ${one && "absolute -top-14"}`} />
                        <p className='text-xl font-bold w-[80%] text-center'>I'm a designer looking to share my work</p>
                        <div className='flex flex-col items-center'>
                            <p className={`font-medium text-center text-lg text-gray-400 ${!one && "hidden"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut iaculis accumsan metus, vel luctus nibh aliquet ac. </p>
                            {one ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#EA4B8A]">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                            </svg> :
                                <div className='w-7 h-7 border-2 rounded-full'>

                                </div>}
                        </div>
                    </div>
                    <div className={`flex relative items-center gap-5 flex-col md:w-[400px] md:h-[325px] justify-center border-4  rounded-xl px-4 pt-8 py-6 ${two && "border-[#EA4B8A] pt-20"}`} onClick={() => setTwo(!two)}>
                        <img src={sec} alt="" className={`w-[250px] md:w-[300px]  ${two && "absolute -top-14"}`} />
                        <p className='text-xl font-bold w-[80%] text-center'>I'm looking to hire a designer</p>
                        <div className='flex flex-col items-center'>
                            <p className={`font-medium text-center text-lg text-gray-400 ${!two && "hidden"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut iaculis accumsan metus, vel luctus nibh aliquet ac. </p>
                            {two ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#EA4B8A]">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                            </svg> :
                                <div className='w-7 h-7 border-2 rounded-full'>

                                </div>}
                        </div>
                    </div>

                    <div className={`flex relative items-center gap-5 flex-col md:w-[400px] md:h-[325px] justify-center border-4  rounded-xl px-4 pt-8 py-6 ${three && "border-[#EA4B8A] pt-20"}`} onClick={() => setThree(!three)}>
                        <img src={third} alt="" className={`w-[250px] md:w-[250px]  ${three && "absolute -top-14"}`} />
                        <p className='text-xl font-bold w-[80%] text-center'>I'm looking for design Inspiration</p>
                        <div className='flex flex-col items-center'>
                            <p className={`font-medium text-center text-lg text-gray-400 ${!three && "hidden"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut iaculis accumsan metus, vel luctus nibh aliquet ac. </p>
                            {three? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#EA4B8A]">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                            </svg> :
                                <div className='w-7 h-7 border-2 rounded-full'>

                                </div>}
                        </div>
                    </div>

                </div>

                <div className='flex flex-col items-center gap-3 py-4'>
                    <p className='font-semibold text-lg'>Already Resgistered? You can select Multiple</p>

                    <button className={`px-20 rounded-xl text-xl py-2 text-white bg-[#EA4B8A] disabled:bg-pink-300`}  onClick={() => navigate('/home')}   disabled={(!one && !two && !three) && true}>Finish</button>
                </div>
            </div>
        </div>
    )
}

export default Aim