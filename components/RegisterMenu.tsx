import React, {useState} from 'react'
import Image from 'next/image'

const RegisterMenu = (menuIsOpen:any) => {


  return (
    <div className={`${menuIsOpen ? 'translate-x-0' : ''} translate-x-full absolute flex w-full md:h-[90vh] md:mb-12 left-0 duration-500 `}>
        <div className='w-full md:h-[90vh] left-0 cursor-pointer opacity-30 bg-slate-400 absolute' />
        <div className={`w-[80vw] md:h-[90vh] h-full mx-auto bg-white relative flex justify-center`}>
            <div className='w-1/2'>
                <Image src={'/assets/images/register.png'} alt={''} width={400} height={300} />
            </div>
            <div className='w-1/2'>
                <h3 className='md:pt-12'>Fill out our Form to register</h3>
                <form className='md:pt-4'>
                    <section className='flex flex-col'>
                        <label htmlFor="text">Full Name:</label>
                        <input type="text" name="Full name" id="" className='md:py-2 md:px-2 md:mt-2 rounded-2xl border' />
                    </section>
                    <section className='flex flex-col'>
                        <label htmlFor="text">Username:</label>
                        <input type="text" name="Full name" id="" className='md:py-2 md:px-2 md:mt-2 rounded-2xl border' />
                    </section>
                    <section className='flex flex-col'>
                        <label htmlFor="text">Email:</label>
                        <input type="email" name="" id="" className='md:py-2 md:px-2 md:mt-2 rounded-2xl border' />
                    </section>
                    <section className='flex flex-col'>
                        <label htmlFor="text">Password:</label>
                        <input type="password" name="" id="" className='md:py-2 md:px-2 md:mt-2 rounded-2xl border' />
                    </section>
                    <section className='flex flex-col'>
                        <label htmlFor="text">Confirm Password:</label>
                        <input type="password" name="" id="" className='md:py-2 md:px-2 md:mt-2 rounded-2xl border' />
                    </section>
                    <section>
                        <input type="submit" value="Register" className='purple-b md:py-2 md:px-8 md:mt-8 rounded-2xl border' />
                    </section>
                </form>
            </div>
        </div>
    </div>
  )
}

export default RegisterMenu
