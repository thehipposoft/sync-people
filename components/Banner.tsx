'use client'
import Image from 'next/image'
import React, {useState} from 'react'
import RegisterMenu from './RegisterMenu'
import Link from 'next/link'


const Banner = () => {

  return (
    <div className='md:h-[80vh] h-screen flex items-start md:items-center justify-center md:mb-[10vh] mx-auto flex-wrap p-6 md:p-0'>
      <div className='md:w-1/2 hidden md:flex flex-col '>
        <h1 className=''>Welcome to the</h1>
        <h1 className='text-[#8D78E0] mb-4 md:mb-0'>new age of work</h1>
        <h3 className='md:pt-4 light'>Connecting Companies to <strong>Talent,</strong><br/> and Job Seekers to <strong>Opportunities.</strong></h3>
        <div className='flex md:mt-8 mt-4 flex-wrap gap-4 md:gap-0 mb-3 md:mb-0'>
            <Link href="/business-sign-up">
              <button className='md:mr-4 white-b px-6 py-2 rounded-3xl'>Looking for talents</button>
            </Link>
            <Link href='/worker-sign-up'>
              <button className='md:mx-4 purple-b px-6 py-2 rounded-3xl'>Looking for work</button>
            </Link>
        </div>
      </div>
      <div className='flex md:hidden flex-col px-4 pt-[20%]'>
        <h1 className='text-6xl'>Welcome to the <span className='text-[#8D78E0]'>new age of work.</span></h1>
        <h3 className='pt-12 light text-2xl'>Connecting Companies to <strong>Talent,</strong><br/> and Job Seekers to <strong>Opportunities.</strong></h3>
        <div className='flex mt-12 flex-wrap gap-2 mb-3'>
            <Link href="/business-sign-up">
              <button className='md:mr-4 white-b md:px-6 px-10 md:py-2 py-4 rounded-3xl text-xl md:text-base'>Looking for talents</button>
            </Link>
            <Link href='/worker-sign-up'>
              <button className='md:mx-4 purple-b md:px-6 px-10 md:py-2 py-4 rounded-3xl text-xl md:text-base'>Looking for work</button>
            </Link>
        </div>
      </div>
      <div className='relative hidden md:block'>
        <Image src={'/assets/images/banner.png'} alt='Video image' width={500} height={400} priority/>
        <Image className='absolute left-[48%] bottom-[48%]' src={'/assets/images/banner-vector.png'} alt='Video play button' width={50} height={50} />
      </div>
    </div>
  )
}

export default Banner