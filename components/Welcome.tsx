'use client'
import Image from 'next/image';
import React, {useState} from 'react';
import MusicModal from './MusicModal';

const Welcome = () => {

    const [open, setIsOpen] = useState<boolean>(false);

    const toggleModal = () => {
        setIsOpen(!open)
    }

    return (
        <div className='px-20 pt-20'>
            <MusicModal isOpen={open} closeMenu={toggleModal}/>
            <div className='bg-[#EBEFFF] pt-20 h-[90vh]'>
                <div className='flex flex-col pl-16'>
                    <Image src={'/assets/logo.svg'} alt='Sync people logo' width={170} height={150} />
                    <span className='blue text-7xl pt-8'>Welcome <strong>Mario!</strong></span>
                </div>
                <div className='h-[140px] w-[300px] mt-24 bg-[#1A335D] rounded-r-full flex justify-center items-center shadow-xl'>
                    <button 
                        className='text-white text-xl font-semibold flex hover:underline border-none items-center'
                        onClick={toggleModal}
                    >
                        Discover 
                        <Image src={'/assets/images/vectors/edit.svg'} className='ml-2' alt='' width={20} height={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Welcome;