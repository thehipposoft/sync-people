import React, {useState} from 'react'
import Image from 'next/image'

const RegisterMenu = (menuIsOpen:any) => {


  return (
    <div className={`${menuIsOpen ? 'translate-x-0' : ''} translate-x-full absolute flex w-full left-0 top-0 duration-500 `}>
        <div className='w-full md:h-screen left-0 cursor-pointer opacity-30 bg-slate-400 absolute' />
        <div className={`w-[80vw] h-screen mx-auto bg-slate-100 relative flex justify-center`}>
            <div className='w-1/2 flex flex-col'>
                <div className='relative h-[500px] max-w-[545px]'>
                    <div className='triangle h-[350px] w-[250px] absolute left-[-44%]'/>
                    <div className=' bg-[#FF8149] h-[450px] w-[350px] absolute rounded-b-[100px]'/>
                    <Image className='absolute z-10 top-8 left-[-10px]' src={'/assets/images/register.png'} alt={''} width={375} height={300} />
                </div>
                <div className='relative flex justify-between w-[350px]'>
                    <Image src={'/assets/logo.png'} width={150} height={100} alt='Sync logo' />
                    <div className='flex justify-end items-end'>
                        <Image src={'/assets/images/mail.png'} width={30} height={30} alt='icon'  />
                        <Image src={'/assets/images/mail.png'} width={30} height={30} alt='icon' className='mx-4' />
                        <Image src={'/assets/images/mail.png'} width={30} height={30} alt='icon' />
                    </div>
                </div>
            </div>
            <div className='w-1/2'>
                <h4 className='md:pt-8 font-semibold'>Please fill out our form to Register!</h4>
                <form className='md:pt-2 md:w-[450px]'>
                    <section className='flex flex-col'>
                        <label htmlFor="text">Full name:</label>
                        <input type="text" name="Full name" id="" />
                    </section>
                    <section className='flex flex-col'>
                        <label htmlFor="text">Username:</label>
                        <input type="text" name="Full name" id="" />
                    </section>
                    <section className='flex flex-col'>
                        <label htmlFor="text">Email:</label>
                        <input type="email" name="" id="" />
                    </section>
                    <section className='flex flex-col'>
                        <label htmlFor="text">Password:</label>
                        <input type="password" name="" id="" />
                    </section>
                    <section className='flex flex-col'>
                        <label htmlFor="text">Confirm Password:</label>
                        <input type="password" name="" id=""/>
                    </section>
                    <section>
                        <input type="submit" value="Register" className='purple-b md:py-2 md:px-8 md:mt-2' />
                    </section>
                </form>
            </div>
        </div>
    </div>
  )
}

export default RegisterMenu
