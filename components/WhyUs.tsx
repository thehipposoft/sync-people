import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/app/constants';

const WhyUs = () => {
  return (
    <div className='md:h-screen flex justify-between items-center mx-auto max-w-[1250px] p-6 md:p-0 flex-wrap mt-6 md:mt-0'>
      <div className='md:w-1/2 flex flex-col justify-center gap-8'>
        <h1 className='font-bold mb-12 md:mb-0'>Why Us?</h1>
        <p className='text-[#798196] leading-7 md:pt-4 mb-6 md:mb-0'>
            Do you have a work visa? Are you an overseas student or just looking for a job?
            We know it's hard when you're just starting out, that's why we're here to help.
            Insyncx bridges the gap between dynamic companies and exceptional talent across Australia. Our knowledge of business needs and candidate potential makes us the perfect choice when searching for the right position or candidate.
            <br/><strong>Sign up for free and find your next job. </strong>
        </p>
        <Link
            href={ROUTES.COMING_SOON}
            className='w-fit md:mx-2 md:mt-8 text-[#8D78E0] border-[#5B24F2] hover:bg-[#8D78E0] hover:border-[#8D78E0] hover:text-white duration-300 border px-6 py-2 rounded-3xl mb-6 md:mb-0'
        >
            Create a Profile
        </Link>
      </div>
        <Image
            src={'/assets/images/whyus.png'}
            alt={'Why Us'}
            className='object-contain max-w-[10rem] mx-auto md:max-w-lg'
            width={425}
            height={500}
        />
    </div>
  )
}

export default WhyUs
