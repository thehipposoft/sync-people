'use client'
import Image from 'next/image'
import React, {useState} from 'react'
import RegisterMenu from './RegisterMenu'
import Link from 'next/link'
import VideoModal from './VideoModal'


const Banner = () => {

  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <div className='h-screen flex justify-between items-center max-w-[1250px] mx-auto flex-wrap p-6 md:p-0'>
      <div className=' hidden md:flex flex-col '>
        <h1 className=''>Welcome to the</h1>
        <h1 className='text-[#8D78E0] mb-4 md:mb-0'>new age of work</h1>
        <h3 className='md:pt-4 light'>Connecting Companies to <strong>Talent,</strong><br/> and Job Seekers to <strong>Opportunities.</strong></h3>
        <div className='flex md:mt-8 mt-4 flex-wrap gap-4 md:gap-0 mb-3 md:mb-0'>
            <Link href="/business-sign-up">
              <button className='md:mr-4 white-b px-6 py-2 rounded-3xl'>Looking for Talent</button>
            </Link>
            <Link href='/worker-sign-up'>
              <button className='md:mx-4 purple-b px-6 py-2 rounded-3xl'>Looking for Work</button>
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
      <div className='group relative hidden md:block w-[540px] h-[408px] bg-slate-200 px-4 rounded-3xl' onClick={toggleModal}>
        <Image src={'/assets/images/banner.png'} alt='Video image' fill priority/>
        <svg width="54" height="71" viewBox="0 0 54 71" fill="none" xmlns="http://www.w3.org/2000/svg" className='relative z-10 left-[45%] top-1/3 group-hover:scale-125 duration-500'>
          <path d="M52.1011 39.1063L6.92064 70.2206C6.25859 70.6762 5.48379 70.9429 4.68021 70.9918C3.87662 71.0407 3.07491 70.8699 2.36196 70.4979C1.649 70.126 1.052 69.567 0.635642 68.8816C0.219288 68.1963 -0.000532504 67.4106 9.68686e-07 66.6099V4.39014C-0.000532504 3.58937 0.219288 2.80372 0.635642 2.11835C1.052 1.43298 1.649 0.874017 2.36196 0.502048C3.07491 0.130079 3.87662 -0.04071 4.68021 0.00818868C5.48379 0.0570873 6.25859 0.32381 6.92064 0.779449L52.1011 31.8937C52.687 32.2975 53.1658 32.8364 53.4965 33.4645C53.8272 34.0926 54 34.791 54 35.5C54 36.209 53.8272 36.9074 53.4965 37.5355C53.1658 38.1636 52.687 38.7025 52.1011 39.1063Z" fill="#F7FAFC"/>
        </svg>
      </div>
      <VideoModal isModalOpen={openModal} closeModalFunc={toggleModal}/>
    </div>
  )
}

export default Banner