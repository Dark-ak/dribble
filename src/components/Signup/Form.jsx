import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'


const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()

    const onSubmit = (data) => navigate('create-profile')

    return (
        <div>
            <div className='my-6'>
                {(errors.name || errors.email || errors.uName || errors.pass) && <li className='text-red-400 text-lg'>The Field is Required</li>}
                {(errors.email && errors.email.type != "required") && <li className='text-red-400 text-lg'>{errors.email}</li>}
                {errors.checkbox && <li className='text-red-400 text-lg'>{errors.checkbox?.message}</li>}

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='md:flex items-center gap-16'>
                        <div className='my-4'>
                            <div className='flex items-center gap-1 my-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-5 h-5 text-red-500  ${!errors.name && "hidden"}`}>
                                    <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                </svg>
                                <label htmlFor="name" className='font-bold text-xl '> Name</label><br />
                            </div>
                            <input type="text" className={`focus:outline-none bg-[#f3f3f3] text-lg px-3 py-2 w-full ${errors.name && "bg-red-200"} rounded-xl`} {...register("name", { required: true })} placeholder='Enter Your Name' />
                        </div>
                        <div className='my-5'>
                            <div className='flex items-center gap-1 my-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-5 h-5 text-red-500  ${!errors.username && "hidden"}`}>
                                    <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                </svg>
                                <label htmlFor="username" className='font-bold text-xl '> Username</label><br />
                            </div>

                            <input type="text" className={`focus:outline-none bg-[#f3f3f3] text-lg px-3 py-2 w-full ${errors.username && "bg-red-200"} rounded-xl`} {...register("username", { required: true })} placeholder='Enter Username' />
                        </div>
                    </div>

                    <div className='my-5'>
                        <div className='flex items-center my-3 gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-5 h-5 text-red-500  ${!errors.email && "hidden"}`}>
                                <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                            </svg>
                            <label htmlFor="email" className='font-bold text-xl'>Email</label><br />
                        </div>
                        <input type="text" className={`focus:outline-none bg-[#f3f3f3] text-lg px-3 py-2 w-full ${errors.email && "bg-red-200"} rounded-xl`} {...register("email", {
                            required: true, pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })} placeholder='Enter Email' />
                    </div>

                    <div className='my-5'>
                        <div className='flex items-center my-3 gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-5 h-5 text-red-500  ${!errors.pass && "hidden"}`}>
                                <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                            </svg>
                            <label htmlFor="password" className='font-bold text-xl'>Password</label><br />
                        </div>
                        <input type="password" className={`focus:outline-none bg-[#f3f3f3] text-lg px-3 py-2 w-full ${errors.pass && "bg-red-200"} rounded-xl`} {...register("pass", { required: true })} placeholder='6+ characters' />
                    </div>

                    <div className=' flex items-start gap-2'>
                        <input type="checkbox" name="" id="" className='text-xl mt w-8 h-8' placeholder='6+ characters' {...register("checkbox", {required: "Accept privacy and policy"})} />
                        <p className='text-lg font-medium'>Creating an account means you're ok with our <span className='text-blue-500'>Terms of service and our privacy policy,</span> and our default <span className='text-blue-500'>Notification Settings.</span></p>
                    </div>
                    <button type='submit' className='bg-[#EA4B8B] text-white text-xl font-medium px-10 py-3 rounded-xl my-5'>Create an account </button>
                </form>
            </div>
        </div>
    )
}

export default Form