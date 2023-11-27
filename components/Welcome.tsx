import Image from 'next/image';
import React from 'react';

const Welcome = () => {
    return (
        <div className='px-20 pt-20'>
            <div className='bg-[#EBEFFF] pt-20 h-[600px]'>
                <div className='flex flex-col pl-16'>
                    <Image src={'/assets/logo.png'} alt='Sync people logo' width={170} height={150} />
                    <span className='blue text-7xl pt-8'>Welcome <strong>Mario!</strong></span>
                </div>
                <div className='h-[140px] w-[300px] mt-24 bg-[#1A335D] rounded-r-full flex justify-center items-center shadow-xl'>
                    <a href="" className='text-white text-xl font-semibold flex hover:underline'>Discover <Image src={'/assets/images/vectors/edit.svg'} className='ml-2' alt='' width={20} height={20}></Image></a>
                </div>
            </div>
        </div>
    );
};

export default Welcome;