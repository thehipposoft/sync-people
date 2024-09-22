import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/app/constants';

const WhyUs = () => {
  return (
    <div className='md:h-screen flex justify-between items-center mx-auto max-w-[1300px] p-6 md:p-0 flex-wrap mt-6 md:mt-0'>
      <div className='md:w-[47%] flex flex-col justify-center'>
        <h1 className='font-bold mb-12 md:mb-0'>Why Us?</h1>
        <p className='text-[#798196] leading-6 md:pt-4 mb-6 md:mb-0'>
            Insyncx bridges the gap between dynamic companies and exceptional talent across Australia. Our insight into business needs and candidate potential makes us the go-to partner for those aiming to elevate their careers and organizations seeking to enrich their teams. Bypass the endless search for the right job or the right candidate - Insyncx streamlines your path to the perfect match.
            <br/><strong>Contact us today and let's achieve success together.</strong>
        </p>
        <Link
            href={ROUTES.COMING_SOON}
            className='w-fit md:mx-2 md:mt-8 text-[#8D78E0] border-[#5B24F2] hover:bg-[#8D78E0] hover:border-[#8D78E0] hover:text-white duration-300 border px-6 py-2 rounded-3xl mb-6 md:mb-0'
        >
            Create a Profile
        </Link>
      </div>
      <div className='relative w-[425px] h-[500px]'>
        <Image src={'/assets/images/whyus.png'} alt='' fill />
      </div>
    </div>
  )
}

export default WhyUs
