import Image from 'next/image'
import React from 'react'

const WhyUs = () => {
  return (
    <div className='h-screen flex justify-between md:px-20 max-w-[1350px] mx-auto'>
      <div className='md:w-2/5 flex flex-col justify-center'>
        <h1 className='font-bold'>Why Us?</h1>
        <p className='text-[#798196] md:pt-4'>
            Getting a job has never been easier. All you have to do is register and complete your profile.
            After a few hours you will receive news from us with the job offer that best suits
            your preferences.  
            Let us do the hard work for you. Leave it to Sync.
        </p>
        <div className='flex'><a href="/profile"><button className='md:mx-2 md:mt-8'>Create a Profile</button></a></div>
      </div>
      <div className='flex justify-center items-center'>
        <Image src={'/assets/images/whyus.png'} width={450} height={400} alt='' />
      </div>
    </div>
  )
}

export default WhyUs
