import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type MusicModalTypes = {
    isOpen: boolean,
    closeMenu: any,
}

const MusicModal = ({ isOpen, closeMenu }:MusicModalTypes) => {
    return (
        <div className={`duration-700 ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-screen h-screen bg-black/50 fixed left-0 top-0 flex justify-center items-center`}>
            <div 
                className={`w-screen h-screen bg-black/50 fixed left-0 top-0 flex justify-center items-center`}
                onClick={closeMenu}
             />
            <div className='relative bg-[#FF8149] w-[40vw] z-10'>
                <div className='flex flex-col p-8'>
                    <Image src={'/assets/images/vectors/music.svg'} alt='Music icon' width={50} height={50}  className='my-2'/>
                    <div className='flex flex-col my-2 text-white text-4xl'>
                        <p className='p-bold'>We know that</p>
                        <p className='p-bold'>filling out forms is</p>
                        <p className='p-bold'>not your thing...</p>
                    </div>
                    <p className='my-2 text-white'>
                        We try to simplify that task. In just 5 steps we need you to tell us a few things about yourself and what you're looking for in your next work experience.
  
                    </p>
                    <p className='my-1 text-white'>
                        How about starting with a Spotify playlist?
                    </p>
                    <div>
                        <Link href={'/create-profile'}>
                            <button className='my-2 purple-b px-12 py-2 rounded-3xl'>
                                Start
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}; 

export default MusicModal;