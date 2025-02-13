import Image from 'next/image';
import React from 'react';
import { Link } from 'next-view-transitions';
import { ROUTES } from '@/app/constants';

const How = () => {
  return (
    <div className='md:h-screen how flex md:pl-20 px-8 md:p-0 pt-12' id='about'>
      <div className='flex items-center 2xl:justify-between mx-auto flex-wrap md:gap-14 max-w-[1300px]'>
        <div className='md:w-[42%] flex flex-col justify-center'>
          <h1 className='font-bold text-white pb-8 text-[40px]'>How it works</h1>
          <div className='words overflow-hidden h-[40px] md:my-4'>
            <h3 className={'block h-full text-[20px] md:text-3xl orange'}>Fill the form</h3>
            <h3 className={'block h-full text-[20px] md:text-3xl '}>Set your preferences</h3>
            <h3 className={'block h-full text-[20px] md:text-3xl teal'}>Find job</h3>
          </div>
          <div className='overflow-hidden h-[40px] md:my-2 progress mb-6 md:mb-0'/>
            <p className='text-white md:pt-4 mb-4 md:mb-0 pr-4 md:pr-0'>
            We know that starting from scratch can be a challenge, but you're not alone. Just fill out a form with information about yourself, your experience and your job preferences. <br/>
            At Insyncx, we'll take care of creating your Digital Passport, the gateway to your next job.
                    <br/> Let us do the hard work for you. Leave it to Insyncx.
            </p>
            <Link
                href={ROUTES.COMING_SOON}
                className='flex mt-4 w-fit font-bold md:mx-2 md:mt-8 text-white border-white border px-6 py-2 rounded-3xl hover:text-[#8D78E0] hover:bg-white duration-300'
            >
                Let's get started!
            </Link>
        </div>
        <div className='w-full h-64 md:w-[650px] md:h-[500px] relative my-8 md:my-0'>
            <Image
                src={'/assets/images/how-1.png'}
                alt={'How it works'}
                className='object-contain'
                fill
            />
        </div>
      </div>
    </div>
  )
}

export default How
