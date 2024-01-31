import React from 'react'
import Image from 'next/image'

const LoginMenu = () => {
  return (
    <div className='flex'>
        <div className='flex items-center md:pl-20 md:w-[65%] bg-[#EBEFFF]'>
            <div>
                <h1 className='text-5xl'>Welcome back!</h1>
                <form className='md:pt-6 md:w-[500px]'>
                    <section className='flex flex-col'>
                        <label htmlFor="text">Username:</label>
                        <input type="text" name="Full name" id="" />
                    </section>
                    <section className='flex flex-col'>
                        <label htmlFor="text">Password:</label>
                        <input type="password" name="" id=""/>
                    </section>
                    <section>
                        <input type="submit" value="Login" className='purple-b md:py-2 md:px-8 md:mt-4 cursor-pointer' />
                    </section> 
                </form>
                <p className='text-center pt-6'>Don't have an account? <a href="/" className='font-semibold underline'>Register</a></p>
                <div className='flex justify-around items-center w-[450px] pt-10'>
                    <Image src={'/assets/logo.svg'} width={150} height={100} alt='Sync logo' />
                    <div className='flex justify-end items-end'>
                        <Image src={'/assets/images/vectors/facebook.svg'} width={30} height={30} alt='icon' className='mr-2' />
                        <Image src={'/assets/images/vectors/twitter.svg'} width={30} height={30} alt='icon' className='mx-4' />
                        <Image src={'/assets/images/vectors/linkedin.svg'} width={30} height={30} alt='icon' className='ml-2' />
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-[#AFB3FF]'>
            <div className=' grid grid-cols-2 mx-auto gap-4 px-4 py-2'>
                <Image src={'/assets/images/login/login-1.png'} alt='' width={220} height={200} />
                <Image src={'/assets/images/login/login-2.png'} alt='' width={220} height={200} />
                <Image src={'/assets/images/login/login-3.png'} alt='' width={220} height={200} />
                <Image src={'/assets/images/login/login-4.png'} alt='' width={220} height={200} />
                <Image src={'/assets/images/login/login-5.png'} alt='' width={220} height={200} />
                <Image src={'/assets/images/login/login-6.png'} alt='' width={220} height={200} />
            </div>
        </div>

    </div>
  )
}

export default LoginMenu
