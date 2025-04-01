'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { Link } from 'next-view-transitions';
import VideoModal from './VideoModal';
import ComingSoonModal from './ComingSoonModal';
import { ROUTES } from '@/app/constants';

const Banner = () => {
    const [openComingSoonModal, setOpenComingSoonModal] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState<boolean>(false);

    const toggleModal = () => {
        setOpenModal(!openModal)
    }

    return (
        <div className='max-w-[1250px] mx-auto px-8 md:px-0 py-6 md:py-0 md:pt-10 md:h-screen grid grid-cols-1 md:grid-cols-2 items-center'>
            <div className='flex flex-col md:mt-0'>
                <h2 className='md:tracking-wide tracking-tight text-[56px] md:text-6xl'>
                    Connecting you with your future
                </h2>
                <h1 className='pt-4 light md:text-[20px] text-[18px] md:w-[600px] leading-6'>
                    Looking to work while you explore Australia? <span>We will <br/> design for you a Skills Portfolio specifically tailored to <br/> the industry you want to apply for so that you get the job you are looking for, without stress or cost.</span>
                </h1>
                <div className='mt-8 flex-wrap gap-4 md:gap-0 mb-3 md:mb-0 hidden'>
                    <Link
                        href={ROUTES.SIGN_UP}
                        className='secondary-btn w-fit md:w-auto'
                    >
                        Looking for Talent
                    </Link>
                    <Link
                        href={ROUTES.SIGN_UP}
                        className='primary-btn w-fit md:w-auto'
                    >
                        Looking for Work
                    </Link>
                </div>
            </div>
            <div
                className='group cursor-pointer relative flex justify-center items-center w-full h-72 md:w-[540px] md:h-[408px] rounded-3xl duration-500 rounded-br-[8rem] mb-8 mt-8 md:mt-auto md:mb-auto'
                onClick={toggleModal}
            >
                <Image
                    src={'/assets/images/banner-overlay.png'}
                    className='object-contain'
                    alt='Video image'
                    fill priority
                />
                <div className='w-full h-full bg-gradient-to-bl from-[#3EC1AA] via-[#7087E5] to-[#7052E5] opacity-80 duration-700 group-hover:opacity-100 rounded-3xl md:rounded-br-[8rem] rounded-br-[5rem] absolute z-10' />
                <div className='relative bottom-[2%] z-20 flex flex-col items-center gap-6'>
                <svg width="54" height="71" viewBox="0 0 54 71" fill="none" xmlns="http://www.w3.org/2000/svg" className='group-hover:scale-110 duration-500'>
                    <path d="M52.1011 39.1063L6.92064 70.2206C6.25859 70.6762 5.48379 70.9429 4.68021 70.9918C3.87662 71.0407 3.07491 70.8699 2.36196 70.4979C1.649 70.126 1.052 69.567 0.635642 68.8816C0.219288 68.1963 -0.000532504 67.4106 9.68686e-07 66.6099V4.39014C-0.000532504 3.58937 0.219288 2.80372 0.635642 2.11835C1.052 1.43298 1.649 0.874017 2.36196 0.502048C3.07491 0.130079 3.87662 -0.04071 4.68021 0.00818868C5.48379 0.0570873 6.25859 0.32381 6.92064 0.779449L52.1011 31.8937C52.687 32.2975 53.1658 32.8364 53.4965 33.4645C53.8272 34.0926 54 34.791 54 35.5C54 36.209 53.8272 36.9074 53.4965 37.5355C53.1658 38.1636 52.687 38.7025 52.1011 39.1063Z" fill="#F7FAFC"/>
                </svg>
                <p className='text-white text-2xl md:rotate-12 group-hover:rotate-0 z-20 md:opacity-0 md:translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 duration-500 delay-100 poppins font-semibold'>Watch Video!</p>
                </div>
            </div>
            <VideoModal isModalOpen={openModal} closeModalFunc={toggleModal}/>
            <ComingSoonModal isOpen={openComingSoonModal} onClose={() => setOpenComingSoonModal(false)} />
        </div>
    )
}

export default Banner
