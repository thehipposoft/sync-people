import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import Image from 'next/image'

const NotFound = () => {
  return (
    <div className='flex flex-col'>
        <Header is404 />
        <div className='md:h-[500px] h-[600px] flex justify-center items-center'>
            <div className='flex md:flex-row flex-col-reverse items-center md:gap-4 gap-8'>
                <Image src={'/assets/images/vectors/hero-pic.svg'} alt='Syncto colors' width={45} height={30} className=' w-40 md:mr-12'/>
                <div className='flex flex-col gap-2 text-center md:text-start'>
                    <h2 className='text-3xl '>Something went wrong!</h2>
                    <h1 className='text-4xl font-bold'>Error 404 - Page Not Found</h1>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default NotFound
