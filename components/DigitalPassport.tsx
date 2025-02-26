import React from 'react';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { ROUTES } from '@/app/constants';

const DigitalPassport = () => {
  return (
    <div className='md:h-screen flex justify-between items-center mx-auto max-w-[1250px] px-8 md:p-0 flex-wrap mt-16 md:mt-0'>
      <div className='md:w-1/2 flex flex-col justify-center gap-2'>
        <h1 className='font-semibold mb-6 md:mb-0'>What is a Skills Portfolio?</h1>
        <p className='text-[#798196] leading-6 md:pt-4 mb-4 md:mb-0'>
            Do you have a work visa, are you a foreign student or just looking for a job? <br/>
            Your Skills Portfolio is more than a resume: it's your ticket to the Australian working world. Tailored to your talents, the industry you want to work in and the job you dream of getting.
            <br/>
        </p>
        <strong className='text-[#798196] md:pt-4'>Sign up for free, your next job is coming soon. </strong>
        <Link
            href={ROUTES.SIGN_UP}
            className='w-fit font-semibold md:mx-2 md:mt-4 mt-6 text-[#8D78E0] border-[#5B24F2] hover:bg-[#8D78E0] hover:border-[#8D78E0] hover:text-white duration-300 border px-6 py-2 rounded-3xl mb-6 md:mb-0'
        >
            Sign Up
        </Link>
      </div>
        <Image
            src={'/assets/images/digital-passport.webp'}
            alt={'Why Us'}
            className='object-contain max-w-[18rem] mt-6 mb-12 md:my-0 md:mx-auto md:max-w-lg md:rounded-tl-[220px] rounded-tl-[8em] md:rounded-br-[220px] rounded-br-[8em]'
            width={425}
            height={500}
        />
    </div>
  )
}

export default DigitalPassport
