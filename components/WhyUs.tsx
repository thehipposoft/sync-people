import Image from 'next/image'
import React from 'react'

const WhyUs = () => {
  return (
    <div className='h-screen flex justify-between md:pl-20 max-w-[1300px] p-6 md:p-0 flex-wrap mt-6 md:mt-0'>
      <div className='md:w-2/5 flex flex-col justify-center'>
        <h1 className='font-bold mb-12 md:mb-0'>Why Us?</h1>
        <p className='text-[#798196] md:pt-4 mb-6 md:mb-0'>
            Getting a job has never been easier. All you have to do is register and complete your profile.
            After a few hours you will receive news from us with the job offer that best suits
            your preferences.
            Let us do the hard work for you. Leave it to Sync.
        </p>
        <a href="/worker-sign-up"><button className='md:mx-2 md:mt-8 text-[#8D78E0] border-[#5B24F2] hover:bg-[#8D78E0] hover:border-[#8D78E0] hover:text-white duration-300 border px-6 py-2 rounded-3xl mb-6 md:mb-0'>Create a Profile</button></a>
      </div>
      <div className='flex justify-center items-center mx-auto md:mx-0'>
        <Image src={'/assets/images/whyus.png'} width={420} height={400} alt='' className='' />
      </div>
    </div>
  )
}

export default WhyUs
