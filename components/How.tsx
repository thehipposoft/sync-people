import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const How = () => {
  return (
    <div className='h-screen how flex md:pl-20 p-6 md:p-0' id='about'>
      <div className='flex items-center 2xl:justify-between max-w-[1350px] mx-auto flex-wrap md:gap-14'>
        <div className='md:w-[35%] flex flex-col justify-center'>
          <h1 className='font-bold text-white md:pb-8 pb-8'>How it works</h1>
          <div className='words overflow-hidden h-[40px] md:my-4'>
            <h3 className={'block h-full text-[20px] md:text-3xl orange'}>Fill the form</h3>
            <h3 className={'block h-full text-[20px] md:text-3xl '}>Set your preferences</h3>
            <h3 className={'block h-full text-[20px] md:text-3xl teal'}>Find job</h3>
          </div>
          <div className='overflow-hidden h-[40px] md:my-2 progress mb-6 md:mb-0'/>
          <p className='text-white md:pt-4 mb-4 md:mb-0 pr-4 md:pr-0 md:leading-7'>
            Getting a job has never been easier. All you have to do is fill out a form with information about yourself, your experience and your job preferences. After a few hours you will hear from us with the job offer that best suits your profile.
                <br/> Let us do the hard work for you. Leave it to Insyncx.
          </p>
          <Link
            href={'/worker-sign-up'}
            className='flex mt-4 w-fit font-bold md:mx-2 md:mt-8 text-white border-white border px-6 py-2 rounded-3xl hover:text-[#8D78E0] hover:bg-white duration-300'
          >
            Let's get started
          </Link>
        </div>
        <div className='md:pl-12'>
            <div className='relative md:w-[675px] w-[375px] md:h-[475px] h-[275px]'>
                <Image src={'/assets/images/how-1.png'} alt='' fill  className='object-cover'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default How
